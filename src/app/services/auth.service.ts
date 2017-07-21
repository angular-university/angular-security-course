import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../model/user";


export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
};

@Injectable()
export class AuthService {

    private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

    user$ = this.subject.asObservable();

    constructor(private http: HttpClient) {

    }

    signUp(email: string, password: string) {

        return this.http.post<User>('/api/signup', {email, password})
            .shareReplay()
            .do(user => this.subject.next(user));
    }

}
