import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartCountIndicatorComponent } from "../cart/cart-count-indicator/cart-count-indicator.component";
import { IconCartComponent } from "../icons/icon-cart.component";
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, IconCartComponent]
})
export class NavbarComponent {
  // mostar el carrito solo en la paginas de shop
  get showCartBtn(): boolean {
    return this.router.url.startsWith("/shop");
  }

  get cartCount(): number {
    return this.cartService.cart.length;
  }

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {

  }

  toggleCartPanel() {
    this.cartService.showCartPanel = !this.cartService.showCartPanel;
  }

}
