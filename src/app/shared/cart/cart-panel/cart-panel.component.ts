import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, Vegetable } from 'src/app/types/types';
import { CartService } from 'src/app/services/Cart.service';
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
  @ViewChild("cartPanel") cartPanelRef!: ElementRef;

  get cart(): Array<CartItem> {
    return this.cartService.cart;
  }

  get showCartPanel(): boolean {
    return this.cartService.showCartPanel;
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  constructor(
    private cartService: CartService,
  ) {
    // cerrar el carrito si se navega a otra página
    this.cartService.showCartPanel = false;
  }

  @HostListener("document:mousedown", ["$event"])
  onGlobalClick(event: MouseEvent): void {
    // Si el panel no está abierto, no hacer nada
    if (!this.showCartPanel) return;

    // Si no hay referencia al elemento, no hacer nada
    if (!this.cartPanelRef) return;

    const insideClick = this.cartPanelRef.nativeElement.contains(event.target);

    // Clic fuera del contenedor
    if (!insideClick) {
      this.cartService.showCartPanel = false;
    }
  }

  closeCartPanel() {
    this.cartService.showCartPanel = false;
  }


  addItemToCart(veg: Vegetable) {
    this.cartService.addItem(veg);
  }
  removeOneItemFromCart(id: number) {
    this.cartService.removeOneById(id);
  }
  removeAllItemsFromCart(id: number) {
    this.cartService.removeAllById(id);
  }
}
