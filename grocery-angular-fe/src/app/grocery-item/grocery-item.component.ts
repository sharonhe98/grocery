import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Grocery} from '../models/grocery/grocery.model.client';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})

export class GroceryItemComponent implements OnInit {

  @Input()
  groceryItem: Grocery;
  editing = false;

  constructor() {
  }

  ngOnInit(): void {
  }
  onClickToggleEditing(): void {
    this.editing = !this.editing;
  }
}

