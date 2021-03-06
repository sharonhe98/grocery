import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {GroceryListComponent} from "./grocery-list/grocery-list.component";
import {CreateGroceryComponent} from "./create-grocery/create-grocery.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: ':uid', component: GroceryListComponent, pathMatch: 'full'},
  {path: ':uid/groceries', component: GroceryListComponent},
  {path: ':uid/create-grocery', component: CreateGroceryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
