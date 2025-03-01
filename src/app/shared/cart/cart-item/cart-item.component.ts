import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartItem, Vegetable } from 'src/app/types/types';
import { CartCountIndicatorComponent } from "../cart-count-indicator/cart-count-indicator.component";
import { IconMinusComponent } from "../../icons/icon-minus.component";
import { IconPlusComponent } from "../../icons/icon-plus.component";
import { IconTrashComponent } from "../../icons/icon-trash.component";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, RouterModule, IconMinusComponent, IconPlusComponent, IconTrashComponent],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;

  @Output() addItemToCart = new EventEmitter<Vegetable>;
  @Output() removeOneItemFromCart = new EventEmitter<number>;
  @Output() removeAllItemsFromCart = new EventEmitter<number>;

  totalCost: number | undefined;

  ngOnInit() {
    // calculado solo al inicializar
    this.totalCost = this.cartItem.count * this.cartItem.veggetable.price;
  }
}
