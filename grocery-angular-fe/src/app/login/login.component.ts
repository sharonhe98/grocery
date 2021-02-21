import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service.client";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  username;
  @Input()
  password;
  @Input()
  clickLogin;

  constructor(
    private us: UserService,
    private cs: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onChangeUsername(event) {
    this.username = event.target.value;
  }

  onChangePassword(event) {
    this.password = event.target.value;
  }

  onClickLogin() {
    const loggedInUser = this.us.login({
      username: this.username,
      password: this.password
    });
    this.cs.set('username', loggedInUser.username);
    this.cs.set('id', loggedInUser._id);
    this.router.navigate(['']);
  };
}
