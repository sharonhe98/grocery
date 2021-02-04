import { Grocery } from '../models/grocery/grocery.model.client';
import { Injectable } from '@angular/core';
import { groceryMock } from './grocery.mock.client';
import { HttpClient } from '@angular/common/http';
import {Subscription} from 'rxjs';

@Injectable()
export class GroceryService {

  constructor(
    private http: HttpClient
  ) {}

  findAllGroceries(): Grocery[] {
    const groceryList: Grocery[] = [];
    this.http.get('http://localhost:3000/api/groceries').subscribe((res: Response) => {
      (res as unknown as Grocery[]).map((gro: Grocery) => {
        groceryList.push(gro);
      });
    });
    return groceryList;
  }

  updateGrocery(grocerId, updatedGrocery): void {
    this.http.put(`http://localhost:3000/api/groceries/${grocerId}`, updatedGrocery).subscribe();
  }

  addGrocery(grocery): void {
    this.http.post('http://localhost:3000/api/groceries', grocery).subscribe();
  }
}

