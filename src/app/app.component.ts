import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs/Observable";
import {User} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

    constructor(private auth:AuthService) {

    }

    ngOnInit() {

        console.log("Session will expire at ", this.auth.getExpiration().format('YYYY-MMM-DD HH:mm:ss'));

        this.auth.retrieveAuthInfoFromUrl();
    }

    signUp() {
        this.auth.signUp();
    }

    login() {
        this.auth.login();

    }

    logout() {
        this.auth.logout();
    }

}

