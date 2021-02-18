import { Injectable } from "@angular/core";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthService {
  isUserLoggedIn: boolean = false;

  login(username: string, password: string) {
    this.isUserLoggedIn = username === 'sharonhe98' && password === 'x40VVZfU';

    return of(this.isUserLoggedIn).pipe(
      tap(val => console.log(val))
    );
  }

  logout(): void {

  }
}
