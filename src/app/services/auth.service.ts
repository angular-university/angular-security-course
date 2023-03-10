import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../model/user';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';

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

  logout() {
    this.subject.next(ANONYMOUS_USER);
  }

  signUp(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/signup', {email, password})
      .pipe(
        tap(user => this.subject.next(user)),
        shareReplay()
      );
  }
}
