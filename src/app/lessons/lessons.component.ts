import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Observable} from "rxjs/Observable";
import {Lesson} from "../model/lesson";

@Component({
    selector: 'lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit, AfterViewInit {

    lessons$: Observable<Lesson[]>;

    constructor(private lessonsService: LessonsService) {

    }

    ngOnInit() {

        this.lessons$ = this.lessonsService.loadAllLessons()
            .catch(err => Observable.of([]));
    }


    ngAfterViewInit() {

        this.lessons$.subscribe( lessons => {

            const container = document.getElementById('lessons');

            lessons.forEach(lesson => {

                const lessonDiv = document.createElement("div");

                lessonDiv.className = "lesson-detail card card-strong";

                const h3 = document.createElement("h3");
                h3.innerText = lesson.description;

                lessonDiv.appendChild(h3);

                container.appendChild(lessonDiv);


            });

        });

    }


}
