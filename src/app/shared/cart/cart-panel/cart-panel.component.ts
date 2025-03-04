import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, Vegetable } from 'src/app/types/types';
import { CartService } from 'src/app/services/Cart.service';
import { IconUpComponent } from "../../icons/icon-up.component";
import { RouterModule } from '@angular/router';
import { CartItemComponent } from "../cart-item/cart-item.component";
import WhatsappChatLinkService from 'src/app/services/WhatsappChatLink.service';

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

  get itemsCount(): number {
    return this.cartService.cart.length;
  }

  constructor(
    private cartService: CartService,
    private whatappChatLinkService: WhatsappChatLinkService,
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

  finishOrder() {
    if (this.itemsCount <= 0) return; // no items

    // Walmart placeholder (just for practice), TODO: use .env instead
    const whatsappPhone = "5215551340054"; // phone number
    if (!whatsappPhone) return; // no phone

    const msg = this.cartService.getCartInTextFormat();
    this.whatappChatLinkService.openChat(whatsappPhone.toString(), msg);
  }
}
