import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";
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

