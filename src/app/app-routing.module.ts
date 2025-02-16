import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopComponent } from './shop/shop.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


// sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    title: "Home",
    data: { hint: "Proyecto de práctica, construido con Angular v16 🚀" }
  },
  {
    path: "shop/:id",
    component: ShopItemComponent,
    title: "Shop item"
  },
  {
    path: "shop",
    component: ShopComponent,
    title: "Shop",
  },
  {
    // redirect to `home`
    path: "",
    title: "redirect",
    redirectTo: "home", pathMatch: "full"
  },
  {
    // Wildcard route for a 404 page
    path: "**",
    title: "not found",
    component: NotFoundPageComponent
  }
];

@NgModule({
  providers: [provideRouter(routes, withComponentInputBinding())],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
