
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson";


@Injectable()
export class LessonsService {

    constructor(private http: HttpClient) {

    }

    loadAllLessons() {
        return this.http.get<Lesson[]>('/api/lessons');
    }

    findLessonById(id:number) {
        return this.http.get<Lesson>('/api/lessons/' + id);
    }

}

