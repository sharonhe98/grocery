import {Component, OnInit} from '@angular/core';
import {GroceryService} from "./services/grocery.service.client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Grocery App';
  groceryList;

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.groceryList = this.groceryService.findAllGroceries();
  }

  addGrocery = (grocery) => {
    this.groceryList = [...this.groceryList, grocery];
  }

  deleteGrocery = (groceryId) => {
    this.groceryList = this.groceryList.filter(grocery => grocery._id !== groceryId);
  }
}
