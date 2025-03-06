import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShopItemComponent } from 'src/app/pages/shop-item/shop-item.component';
import { ShopComponent } from 'src/app/pages/shop/shop.component';
import { NotFoundPageComponent } from 'src/app/pages/not-found-page/not-found-page.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';


// sets up routes constant where you define your routes
export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    title: "Veggie Shop",
    data: { hint: "Proyecto de práctica, construido con Angular v16 🚀" }
  },
  {
    path: "project-details",
    component: ProjectDetailsComponent,
  },
  {
    path: "shop/:id",
    component: ShopItemComponent,
  },
  {
    path: "shop",
    component: ShopComponent,
  },
  {
    // redirect to `home`
    path: "",
    redirectTo: "home", pathMatch: "full"
  },
  {
    // Wildcard route for a 404 page
    path: "**",
    component: NotFoundPageComponent
  }
];
