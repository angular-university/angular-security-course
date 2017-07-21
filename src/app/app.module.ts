import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {routesConfig} from "./routes.config";
import {LessonsService} from "./services/lessons.service";
import {ReactiveFormsModule} from "@angular/forms";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';

import {AuthService} from "./services/auth.service";



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
      RouterModule.forRoot(routesConfig),
      ReactiveFormsModule
  ],
  providers: [LessonsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
