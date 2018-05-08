
import {of as observableOf, Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Lesson} from "../model/lesson";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

    lessons$: Observable<Lesson[]>;
    isLoggedIn$: Observable<boolean>;

    constructor(private lessonsService: LessonsService, private authService: AuthService) {

    }

    ngOnInit() {
        this.lessons$ = this.lessonsService.loadAllLessons().pipe(catchError(err => observableOf([])));
        this.isLoggedIn$ = this.authService.isLoggedIn$;
    }

}
