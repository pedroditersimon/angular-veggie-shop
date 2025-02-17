import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShopItemComponent } from 'src/app/pages/shop-item/shop-item.component';
import { ShopComponent } from 'src/app/pages/shop/shop.component';
import { NotFoundPageComponent } from 'src/app/pages/not-found-page/not-found-page.component';


// sets up routes constant where you define your routes
export const routes: Routes = [
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
