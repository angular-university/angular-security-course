import {Routes} from '@angular/router';
import {LessonsComponent} from "./lessons/lessons.component";
import {LessonDetailComponent} from "./lesson-detail/lesson-detail.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

export const routesConfig: Routes = [
    {
        path: 'lessons',
        component: LessonsComponent
    },
    {
        path: 'lessons/:id',
        component: LessonDetailComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        redirectTo:'/lessons',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/lessons',
        pathMatch: 'full'
    }
];