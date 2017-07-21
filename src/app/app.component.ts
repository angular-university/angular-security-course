import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs/Observable";
import {User} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    user$: Observable<User>;

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        this.user$ = this.authService.user$;
    }




}
