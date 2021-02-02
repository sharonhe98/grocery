import { Grocery } from '../models/grocery/grocery.model.client';
import { Injectable } from '@angular/core';
import { groceryMock } from './grocery.mock.client';

@Injectable()
export class GroceryService {
  groceries: Grocery[] = groceryMock;
  findAllGroceries(): Grocery[] {
    return this.groceries;
  }
}
