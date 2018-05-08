import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {routesConfig} from "./routes.config";
import {LessonsService} from "./services/lessons.service";
import {ReactiveFormsModule} from "@angular/forms";

import {AuthService} from "./services/auth.service";
import { AdminComponent } from './admin/admin.component';
import { RouterModule} from "@angular/router";














@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      HttpClientXsrfModule.withOptions({
         cookieName: 'XSRF-TOKEN',
         headerName:  'x-xsrf-token'
      }),
      RouterModule.forRoot(routesConfig),
      ReactiveFormsModule
  ],
  providers: [
      LessonsService,
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
