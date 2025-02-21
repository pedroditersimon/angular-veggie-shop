import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";
import { CartService } from 'src/app/services/cart.service';
import { VeggetablesService } from 'src/app/services/veggetables.service';
import { VegetableType } from 'src/app/types/types';
import { IconCartComponent } from "../../shared/icons/icon-cart.component";
import { CartCountIndicatorComponent } from "../../shared/cart/cart-count-indicator/cart-count-indicator.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, PageLayoutComponent, CartCountIndicatorComponent]
})
export class ShopComponent {
  veggetables: Array<VegetableType> = [];

  constructor(
    private veggetablesService: VeggetablesService,
    private cartService: CartService
  ) {
    this.veggetables = this.veggetablesService.vegetables;
  }

  getItemCount(id: number) {
    return this.cartService.getCartItem(id)?.count || 0;
  }

  addItemToCart(veg: VegetableType) {
    this.cartService.addToCart(veg);
  }
}
