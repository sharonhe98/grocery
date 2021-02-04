import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GroceryService} from './services/grocery.service.client';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CreateGroceryComponent } from './create-grocery/create-grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryItemComponent,
    CreateGroceryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GroceryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
