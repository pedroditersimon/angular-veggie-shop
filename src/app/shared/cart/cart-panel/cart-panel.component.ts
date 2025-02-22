import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemType, VegetableType } from 'src/app/types/types';
import { CartService } from 'src/app/services/cart.service';
import { IconUpComponent } from "../../icons/icon-up.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartItemComponent } from "../cart-item/cart-item.component";

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, IconUpComponent, CartItemComponent],
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.css']
})
export class CartPanelComponent {
  cart: Array<CartItemType>;

  constructor(
    private cartService: CartService,
  ) {
    this.cart = this.cartService.cart;

    // cerrar el carrito si se navega a otra página
    this.cartService.showCartPanel = false;
  }

  getShowCartPanel() {
    return this.cartService.showCartPanel;
  }

  closeCartPanel() {
    this.cartService.showCartPanel = false;
  }


  addItemToCart(veg: VegetableType) {
    this.cartService.addToCart(veg);
  }
  removeOneItemFromCart(id: number) {
    this.cartService.removeOneFromCart(id);
  }
  removeAllItemsFromCart(id: number) {
    this.cartService.removeAllFromCart(id);
  }
}
