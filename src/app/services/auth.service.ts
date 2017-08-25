import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
};

declare const Auth0Lock: any;


const AUTH0_API_KEY = 'hHhF4PWGY7vxLQH2HatJaUOertB1dDrU';
const AUTH0_SUB_DOMAIN = 'angularsecuritycourse.auth0.com';


const LOCK_COMMON_CONFIG = {
    autoclose: true,
    theme: {
        logo: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        socialButtonStyle: 'big'
    },
    languageDictionary: {
        title: 'Welcome'
    },
    auth: {
        redirect: false
    }
};

const signUpConfig: any = {
    ...LOCK_COMMON_CONFIG,
    initialScreen: 'signUp'
};


const lockSignUp = new Auth0Lock(AUTH0_API_KEY, AUTH0_SUB_DOMAIN, signUpConfig);





@Injectable()
export class AuthService {

    private subject = new BehaviorSubject<User>(undefined);

    user$: Observable<User> = this.subject.asObservable().filter(user => !!user);

    isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);

    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);


    constructor(private http: HttpClient) {
        this.loadUserData();
    }


    loadUserData() {
        this.http.get<User>('/api/user')
            .subscribe(
                user => this.subject.next(user ? user : ANONYMOUS_USER),
                err => {
                    console.log("Could not load user data", err);
                    this.subject.next(ANONYMOUS_USER);
                });
    }

    login() {

        const loginConfig: any = {
            ...LOCK_COMMON_CONFIG,
            initialScreen: 'login'
        };

        const lockLogin = new Auth0Lock(AUTH0_API_KEY, AUTH0_SUB_DOMAIN, loginConfig);

        lockLogin.on("authenticated", authResult => {

            console.log(authResult);

            localStorage.setItem("ID_TOKEN", authResult.idToken);
            this.loadUserData();
        });

        lockLogin.show();
    }

    logout() {
        localStorage.removeItem("ID_TOKEN");
        this.subject.next(ANONYMOUS_USER);
    }

    signUp() {

        //TODO
        lockSignUp.show();
    }


    onUserInfo(error, profile) {
        if (error) {
            console.error(error);
            this.subject.error("Sign up failed");
        }
        else {
            this.http.post<User>('/api/signup', {email: profile.email})
                .shareReplay()
                .do(user => this.subject.next(user))
                .subscribe();
        }
    }

    isAuthenticated() {

        //TODO
    }


}







