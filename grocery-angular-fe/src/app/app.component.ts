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
    console.log(this.cookieService.getAll())
    if (this.cookieService.check('currentUser')){
      let cu = JSON.parse(this.cookieService.get('currentUser'))
      console.log(cu)
      this.currentUser = cu;
      this.currentPage = cu._id || cu._id + '/groceries' || cu._id + '/create-grocery';
      this.router.navigate([this.currentPage]);
    } else {
      this.currentPage = 'login';
      this.router.navigate(['login']);
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
    this.currentUser = undefined;
    this.router.navigate(['login']);
  }
}
