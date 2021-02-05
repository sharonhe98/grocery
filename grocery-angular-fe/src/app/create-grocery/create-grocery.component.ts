import {Component, Input, OnInit} from '@angular/core';
import { FormsModule } from "@angular/forms";
import {GroceryService} from "../services/grocery.service.client";

@Component({
  selector: 'app-create-grocery',
  templateUrl: './create-grocery.component.html',
  styleUrls: ['./create-grocery.component.css']
})
export class CreateGroceryComponent implements OnInit {

  @Input()
  groceryName;
  groceryAmount;
  groceryDesc;
  groceryLow;

  constructor(
    private groceryService: GroceryService
  ) { }

  ngOnInit(): void {
  }

  onChangeName(event) {
    this.groceryName = event.target.value;
  }

  onChangeAmount(event) {
    this.groceryAmount = event.target.value;
  }

  onChangeDesc(event) {
    this.groceryDesc = event.target.value;
  }

  onChangeLow(event) {
    this.groceryLow = event.target.value.toLowerCase() === 'true';
  }

  onClickSave() {
    this.groceryService.addGrocery({
      name: this.groceryName,
      amount: this.groceryAmount,
      desc: this.groceryDesc,
      low: this.groceryLow
    });
  }

}