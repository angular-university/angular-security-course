
import {tap, shareReplay, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "../model/user";

export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
}


@Injectable()
export class AuthService {

    private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

    user$: Observable<User> = this.subject.asObservable();

    isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));

    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

    constructor(private http: HttpClient) {


    }

    signUp(email:string, password:string ) {

        return this.http.post<User>('/api/signup', {email, password}).pipe(
            shareReplay(),
            tap(user => this.subject.next(user)),);

    }

}