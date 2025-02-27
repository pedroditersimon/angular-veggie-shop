import {
  Component,
  Input as RouteParam
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";
import { VegetableType } from 'src/app/types/types';
import { VeggetablesService } from 'src/app/services/Veggetables.service';
import { CommonModule } from '@angular/common';
import { IconCheckComponent } from "../../shared/icons/icon-check.component";
import { CartService } from 'src/app/services/Cart.service';
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


  get itemCount(): number {
    const vegId = Number(this.itemId);
    return this.cartService.getItem(vegId)?.count || 0;
  }

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

  addItemToCart() {
    const vegId = Number(this.itemId);
    const veg = this.veggetableService.getById(vegId);
    // invalid veggetable id
    if (!veg) return;

    this.cartService.addItem(veg);
  }
}
