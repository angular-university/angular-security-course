
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class LessonsService {

    constructor(private http: HttpClient) {


    }


    loadAllLessons() {
        return this.http.get('/api/lessons');
    }


    findLessonById(id:number) {
        return this.http.get('/api/lessons/' + id);
    }


}