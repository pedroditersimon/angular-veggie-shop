import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartCountIndicatorComponent } from "../components/cart-count-indicator/cart-count-indicator.component";
import { IconCartComponent } from "../icons/icon-cart.component";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, IconCartComponent]
})
export class NavbarComponent {
  showCartBtn;

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {
    // mostar el carrito solo en la paginas de shop
    this.showCartBtn = this.router.url.startsWith("/shop");
  }

  getCartCount() {
    return this.cartService.getCartCount();
  }

}
