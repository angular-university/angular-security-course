import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {map, shareReplay, tap} from 'rxjs/operators';

export const ANONYMOUS_USER: User = {
  id: undefined,
  email: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/signup', {email, password})
      .pipe(
        shareReplay(),
        tap(user => this.subject.next(user))
      );
  }
}
