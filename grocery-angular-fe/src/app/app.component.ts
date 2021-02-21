import {Component, Input, OnInit} from '@angular/core';
import {GroceryService} from "./services/grocery.service.client";
import {UserService} from "./services/user.service.client";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Grocery App';
  groceryList;
  currentUser;
  currentPage;

  constructor(
    private groceryService: GroceryService,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
    private ar: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.currentUser = {
      username: this.cookieService.get('username'),
      _id: this.cookieService.get('id'),
    }
    if (this.currentUser._id.length === 0) {
      this.currentPage = 'login';
      this.router.navigate(['login']);
    } else {
        this.currentPage = 'groceries' || 'create-grocery';
        this.router.navigate([this.currentPage]);
    }
  }

  addGrocery = (grocery) => {
    this.groceryList = [...this.groceryList, grocery];
  };

  deleteGrocery = (groceryId) => {
    this.groceryList = this.groceryList.filter(grocery => grocery._id !== groceryId);
  };

  onClickLogout = () => {
    this.userService.logout();
    this.cookieService.delete('username');
    this.cookieService.delete('id');
    this.currentUser = undefined;
    console.log(this.currentUser);
    this.router.navigate(['login']);
  }
}
