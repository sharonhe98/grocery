import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Grocery} from '../models/grocery/grocery.model.client';
import {GroceryService} from '../services/grocery.service.client';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})

export class GroceryItemComponent implements OnInit {

  @Input()
  groceryItem: Grocery;
  editing = false;

  @Input()
  name = '';
  amount = 0;
  desc = '';
  low = false;

  constructor(
    private groceryService: GroceryService
  ) {
  }

  ngOnInit(): void {
    this.name = this.groceryItem.name;
    this.amount = this.groceryItem.amount;
    this.desc = this.groceryItem.desc;
    this.low = this.groceryItem.low;
  }
  onClickEdit(): void {
    this.editing = true;
  }
  onChangeName(event): void {
    console.log(event.target.value);
    this.name = event.target.value;
  }
  onChangeDesc(event): void {
    this.desc = event.target.value;
  }
  onChangeAmount(event): void {
    this.amount = event.target.value;
  }
  onChangeLow(event): void {
    const truefalse = event.target.value.toLowerCase() === 'true';
    this.low = truefalse;
  }
  onClickSave(): void {
    this.groceryService.updateGrocery(this.groceryItem._id, {
      ...this.groceryItem,
      name: this.name,
      amount: this.amount,
      desc: this.desc,
      low: this.low
    });
    this.editing = false;
  }
}

