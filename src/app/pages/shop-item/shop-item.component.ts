import {
  Component,
  Input as RouteParam
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";
import { VegetableType } from 'src/app/types/types';
import { VeggetablesService } from 'src/app/services/veggetables.service';
import { CommonModule } from '@angular/common';
import { IconCheckComponent } from "../../shared/icons/icon-check.component";
import { CartService } from 'src/app/services/cart.service';
import { IconCartComponent } from "../../shared/icons/icon-cart.component";
import { CartCountIndicatorComponent } from "../../shared/cart/cart-count-indicator/cart-count-indicator.component";


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, PageLayoutComponent, IconCheckComponent, CartCountIndicatorComponent]
})
export class ShopItemComponent {
  @RouteParam("id") itemId = "";
  veggetable?: VegetableType;

  constructor(
    private router: Router,
    private veggetableService: VeggetablesService,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    this.veggetable = this.veggetableService.getById(Number(this.itemId));
  }

  goBack() {
    this.router.navigate(['/shop']);
  }

  getItemCount() {
    const vegId = Number(this.itemId);
    return this.cartService.getCartItem(vegId)?.count || 0;
  }

  addItemToCart() {
    const vegId = Number(this.itemId);
    const veg = this.veggetableService.getById(vegId);
    // invalid veggetable id
    if (!veg) return;

    this.cartService.addToCart(veg);
  }
}
