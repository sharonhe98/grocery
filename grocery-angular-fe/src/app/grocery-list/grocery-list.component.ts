import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {GroceryService} from '../services/grocery.service.client';
import {Grocery} from '../models/grocery/grocery.model.client';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})

export class GroceryListComponent implements OnInit, OnChanges {

 @Input() groceryList: Grocery[];
  @Input()
  deleteGrocery;

  constructor(
    private groceryService: GroceryService,
    private cd: ChangeDetectorRef
  ){
    setInterval(() => cd.detectChanges(), 1);
  }

  ngOnChanges(changes:SimpleChanges): void {
    // let change = changes['groceryList'];
    // console.log(change);
  }

  ngOnInit(): void {
    // this.groceryList = this.groceryService.findAllGroceries();
  }

}
