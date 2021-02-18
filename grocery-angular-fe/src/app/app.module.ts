import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GroceryService} from './services/grocery.service.client';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CreateGroceryComponent } from './create-grocery/create-grocery.component';
import { LoginComponent } from './login/login.component';
import {UserService} from "./services/user.service.client";
import {CookieService} from "ngx-cookie-service";

import { RouterModule } from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryItemComponent,
    CreateGroceryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    GroceryService,
    UserService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
