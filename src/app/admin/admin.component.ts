import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../common/forms.css']
})
export class AdminComponent {

    form:FormGroup;

    constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {

        this.form = this.fb.group({
            userEmail: ['user@gmail.com',Validators.required]
        });
    }


    loginAsUser() {

        const val = this.form.value;

        if (val.email && val.password) {

            this.authService.loginAsUser(val.email)
                .subscribe(
                    () => {
                        console.log("Logged in as user with email " + val.email);
                        this.router.navigateByUrl('/');
                    }
                );

        }


    }

}
