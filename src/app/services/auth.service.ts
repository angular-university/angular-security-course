import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import * as auth0 from 'auth0-js';
import {Router} from "@angular/router";

export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
};

const AUTH_CONFIG = {
    clientID: '2rfnGSUN3BRd2Bg3MLY3IPCWbQhxR7bG',
    domain: "angularuniv-security-course.auth0.com"
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

    constructor(private http: HttpClient, private router: Router) {

    }

    login() {
        this.auth0.authorize();
    }

    signUp() {

    }

    retrieveAuthInfoFromUrl() {
        this.auth0.parseHash((err, authResult) => {

            if (err) {
                console.log("Could not parse the hash", err);
            }
            else if (authResult && authResult.idToken) {
                window.location.hash = '';
                console.log("Authentication successful, authResult: ", authResult);
                this.setSession(authResult);
            }

        });
    }

    logout() {

    }

    public isLoggedIn() {
        return false;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    private setSession(authResult) {

        localStorage.setItem('id_token', authResult.idToken);

    }
}







