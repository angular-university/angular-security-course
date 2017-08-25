import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import * as auth0 from 'auth0-js';
import {Router} from "@angular/router";

import * as moment from "moment";


export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
};

const AUTH_CONFIG = {
    clientID: 'hHhF4PWGY7vxLQH2HatJaUOertB1dDrU',
    domain: "angularsecuritycourse.auth0.com"
};





@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.clientID,
        domain: AUTH_CONFIG.domain,
        responseType: 'token id_token',
        redirectUri: 'https://localhost:4200/lessons'
    });

    private userSubject = new BehaviorSubject<User>(undefined);

    user$: Observable<User> = this.userSubject.asObservable().filter(user => !!user);

    private loggedInSubject = new BehaviorSubject<boolean>(undefined);

    constructor(private http: HttpClient, private router: Router) {
        this.loadUserData();
    }

    loadUserData() {
        this.http.get<User>('/api/user')
            .subscribe(
                user => this.userSubject.next(user ? user : ANONYMOUS_USER),
                err => {
                    console.log("Could not load user data", err);
                    this.userSubject.next(ANONYMOUS_USER);
                });
    }

    login() {
        this.auth0.authorize();
    }

    retrieveAuthInfoFromUrl() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
            } else if (err) {
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    private setSession(authResult): void {
        const expiresAt = JSON.stringify(moment().add(authResult.expiresIn, 'ms').valueOf());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.loggedInSubject.next(true);
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.loggedInSubject.next(false);
        this.router.navigate(['/lessons']);
    }

    public isLoggedIn(): boolean {
        const expiration = localStorage.getItem('expires_at');
        if (!expiration) {
            return false;
        }
        const expiresAt = JSON.parse(expiration);
        return moment().isBefore(moment(expiresAt));
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    signUp() {


    }

    onUserInfo(error, profile) {
        if (error) {
            console.error(error);
            this.userSubject.error("Sign up failed");
        }
        else {
            this.http.post<User>('/api/signup', {email: profile.email})
                .shareReplay()
                .do(user => this.userSubject.next(user))
                .subscribe();
        }
    }


}







