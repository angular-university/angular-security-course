import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as auth0 from 'auth0-js';
import {Router} from "@angular/router";
import * as moment from "moment";


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
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.router.navigate(['/lessons']);
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    private setSession(authResult) {

        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

    }
}







