import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent implements OnInit {

    form:FormGroup;

    errors:string[] = [];

    messagePerErrorCode = {
        min: 'The minimum length is 10 characters',
        uppercase: 'At least one upper case character',
        digits: 'At least one numeric character',
    };


    constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required],
            confirm: ['',Validators.required]
        });

    }


    ngOnInit() {

    }


    signUp() {
        const val = this.form.value;

        if (val.email && val.password && val.password === val.confirm) {

            this.authService.signUp(val.email, val.password)
                .subscribe(
                    () => {
                        console.log("User created successfully");

                        this.router.navigateByUrl('/');

                    },
                    response => this.errors = response.error.errors
                );

        }

    }

}



