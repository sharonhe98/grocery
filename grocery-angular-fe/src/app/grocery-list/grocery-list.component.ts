import {Component, Injectable, OnInit} from '@angular/core';
import {GroceryService} from '../services/grocery.service.client';
import {Grocery} from '../models/grocery/grocery.model.client';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})

export class GroceryListComponent implements OnInit {

 groceryList: Grocery[] = [];

  constructor(
    private groceryService: GroceryService
  ){ }

  ngOnInit(): void {
    this.groceryList = this.groceryService.findAllGroceries();
  }

}
