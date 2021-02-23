import {Component, Input, OnInit} from '@angular/core';
import { FormsModule } from "@angular/forms";
import {GroceryService} from "../services/grocery.service.client";
import {CookieService} from "ngx-cookie-service";

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
  @Input()
  addGrocery;

  constructor(
    private groceryService: GroceryService,
    private cs: CookieService,
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

  onClickSave() {
    const uid = JSON.parse(this.cs.get('currentUser'))._id;
    const newGrocery = {
      name: this.groceryName,
      amount: this.groceryAmount,
      desc: this.groceryDesc,
      userId: uid,
      low: false
    };
    this.groceryService.addGrocery(newGrocery);
    // this.addGrocery(newGrocery);
  }

}
