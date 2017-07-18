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
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
