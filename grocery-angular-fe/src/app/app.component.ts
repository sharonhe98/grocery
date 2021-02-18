import {Component, Input, OnInit} from '@angular/core';
import {GroceryService} from "./services/grocery.service.client";
import {UserService} from "./services/user.service.client";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Grocery App';
  groceryList;
  currentUser;

  constructor(
    private groceryService: GroceryService,
    private userService: UserService,
    private cookieService: CookieService
    ) {}

  ngOnInit(): void {
    console.log(this.currentUser)
    this.currentUser = {
      username: this.cookieService.get('username'),
      _id: this.cookieService.get('id'),
    }
    // console.log(sessionStorage.getItem('username'));
    // console.log(sessionStorage.getItem('id'))
  }

  addGrocery = (grocery) => {
    this.groceryList = [...this.groceryList, grocery];
  };

  deleteGrocery = (groceryId) => {
    this.groceryList = this.groceryList.filter(grocery => grocery._id !== groceryId);
  };

  onClickLogin = (user) => {
    const loggedInUser = this.userService.login(user);
    this.cookieService.set('username', loggedInUser.username);
    this.cookieService.set('id', loggedInUser._id);
    this.currentUser = loggedInUser;
  };

  onClickLogout = () => {
    this.userService.logout();
    this.cookieService.delete('username');
    this.cookieService.delete('id');
    this.currentUser = undefined;
    console.log(this.currentUser);
  }
}
