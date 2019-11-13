import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component"
 
const appRoutes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'menu'
  },
  {
    path: "menu",
    component: ProductsComponent
  },
  {
    path: "order",
    component: ShoppingCartComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 