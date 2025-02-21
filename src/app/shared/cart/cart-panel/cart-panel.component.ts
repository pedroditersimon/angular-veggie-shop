import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from 'src/app/types/types';
import { CartService } from 'src/app/services/cart.service';
import { IconUpComponent } from "../../icons/icon-up.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  imports: [CommonModule, IconUpComponent],
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.css']
})
export class CartPanelComponent {
  cart: Array<CartItem>;

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

}
