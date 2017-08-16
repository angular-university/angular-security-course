import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {routesConfig} from "./routes.config";
import {LessonsService} from "./services/lessons.service";
import {ReactiveFormsModule} from "@angular/forms";

import {AuthService} from "./services/auth.service";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/of';


@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      HttpClientXsrfModule.withOptions({
          cookieName: 'CSRF-TOKEN',
          headerName: 'x-csrf-token',
      }),
      RouterModule.forRoot(routesConfig),
      ReactiveFormsModule
  ],
  providers: [LessonsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
