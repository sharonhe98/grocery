import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/grocery/user.model.client";
import {CookieService} from "ngx-cookie-service";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(
    private http: HttpClient,
    private cs: CookieService
  ) {}

  currentUser(user) {
    this.http.post('http://localhost:3000/api/current', user).subscribe(cu => {
      console.log("current user: " + cu);
      return cu;
    });
  };

  getCurrentUser() {
    this.http.get('http://localhost:3000/api/current', {withCredentials: true}).subscribe(cu => {
      console.log(cu)
      return cu;
    });
  };

  login(newUser) {
    let loggedInUser;
    return this.http.post('http://localhost:3000/api/login', newUser).subscribe(nu => {
      loggedInUser = nu as User;
      this.cs.set('currentUser', JSON.stringify(loggedInUser), {path: '/'});
      console.log(loggedInUser)
    });
  };

  logout() {
    this.http.post('http://localhost:3000/api/logout', {responseType: 'string',
      withCredentials: true}).subscribe();
    this.cs.delete('username');
    this.cs.delete('id');
    this.cs.delete('role');
    this.cs.deleteAll();
  };
}
