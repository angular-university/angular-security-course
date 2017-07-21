import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Observable} from "rxjs/Observable";
import {Lesson} from "../model/lesson";
import {User} from "../model/user";

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {


  lessons$: Observable<Lesson[]>;
  user$: Observable<User>;

  constructor(
      private lessonsService:LessonsService
  ) {

  }

  ngOnInit() {

      this.lessons$ = this.lessonsService.loadAllLessons();
  }

}
