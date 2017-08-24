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


const AUTH0_API_KEY = '8ZZspDUExxTwvfda6spgB24PGqvGZGYp';
const AUTH0_SUB_DOMAIN =  'angular-academy.eu.auth0.com';


const LOCK_COMMON_CONFIG = {
    autoclose:true,
    theme: {
        logo: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        socialButtonStyle: 'big'
    },
    languageDictionary: {
        title:'Welcome'
    },
    auth: {
        redirect: false
    }
};

const signUpConfig: any = {
    ...LOCK_COMMON_CONFIG,
    initialScreen:'signUp'
};


const lockSignUp = new Auth0Lock(AUTH0_API_KEY, AUTH0_SUB_DOMAIN, signUpConfig);


const loginConfig: any = {
    ...LOCK_COMMON_CONFIG,
    initialScreen:'login'
};


const lockLogin = new Auth0Lock(AUTH0_API_KEY, AUTH0_SUB_DOMAIN, loginConfig);




@Injectable()
export class AuthService {

    private subject = new BehaviorSubject<User>(undefined);

    user$: Observable<User> = this.subject.asObservable().filter(user => !!user);

    isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);

    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

    private createAuth0AuthenticatedObservable: Function;


    constructor(private http: HttpClient) {

        http.get<User>('/api/user')
            .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER));

        this.createAuth0AuthenticatedObservable = Observable.bindNodeCallback(lockSignUp.on, (err, authResult) => {
            console.log("authResult", authResult);
            return authResult;
        });



        /*
        lock.on("authenticated", (authResult) => {
            lock.getUserInfo(authResult.accessToken, (error, profile) => {
                if (
                    error) {


                }
                else {


                }

            });
        });*/

    }

    signUp(): Observable<any>  {


        lockSignUp.on("authenticated", authResult => {

            console.log("authResult", authResult);

        });

        lockSignUp.show();




        //return this.createAuth0AuthenticatedObservable("authenticated");

        return Observable.of(true);
    }



    login(): Observable<any> {


/*
        lockLogin.on("authenticated", authResult => {

            console.log("authResult", authResult);

        });*/


        lockLogin.show();

        const create: Function = Observable.bindCallback(lockLogin.on, authResult => {

            console.log("authResult", authResult);

        });

        return create("authenticated");
    }


    logout() : Observable<any> {



        //TODO
        return Observable.of(true);
    }

}








