import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Observable} from "rxjs/Observable";
import {Lesson} from "../model/lesson";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

    lessons$: Observable<Lesson[]>;

    constructor(private lessonsService: LessonsService, private sanitizer: DomSanitizer) {

    }


    ngOnInit() {
        this.lessons$ = this.lessonsService.loadAllLessons()
            .catch(err => Observable.of([]));
    }

    safeHtml(unsafeHtml:string) {
        return this.sanitizer.bypassSecurityTrustHtml(unsafeHtml);
    }

    safeResourceUrl(unsafeResourceUrl) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeResourceUrl);
    }


}
