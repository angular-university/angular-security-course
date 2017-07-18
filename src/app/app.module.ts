import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {routesConfig} from "./routes.config";
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import {LessonsService} from "./services/lessons.service";

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LoginComponent,
    SignupComponent,
    LessonDetailComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routesConfig)
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
