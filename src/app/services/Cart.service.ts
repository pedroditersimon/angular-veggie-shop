import { Injectable } from '@angular/core';
import { CartItem, Vegetable } from '../types/types';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  showCartPanel: boolean = false;
  cart: Array<CartItem> = [];

  addItem(veg: Vegetable) {
    const existingItem = this.getItem(veg.id);

    // add new if item dosnt exists
    if (!existingItem) {
      this.cart.push({
        count: 1,
        veggetable: { ...veg } // copy the object
      });
      return;
    }

    // add count
    this.setItem({
      ...existingItem,
      count: existingItem.count + 1
    });
  }

  // return true if an item is decremented,
  // return false if item dosnt exists or dosnt have any count
  removeOneById(id: number): boolean {
    const existingItem = this.getItem(id);

    // return if item dosnt exists
    if (!existingItem) return false;

    // delete if is the last one
    if (existingItem.count === 1) {
      this.removeAllById(id);
      return false;
    }

    // remove one
    this.setItem({
      ...existingItem,
      count: existingItem.count - 1
    });
    return true;
  }

  removeAllById(id: number) {
    this.cart = this.cart.filter(item => item.veggetable.id !== id);
  }

  getItem(id: number) {
    return this.cart.find(item => item.veggetable.id === id);
  }

  getAllItemsCount() {
    return this.cart.reduce((acc, item) => acc + item.count, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((acc, item) => acc + item.count * item.veggetable.price, 0);
  }

  // replace existing item with the given one, with same id
  private setItem(item: CartItem) {
    this.cart = this.cart.map(cartItem => {
      if (item.veggetable.id === cartItem.veggetable.id)
        return item
      else return cartItem;
    });
  }

  getCartInTextMsgFormat() {
    const itemList = this.cart.map(item =>
      `${item.count}x ${item.veggetable.name} - $${item.veggetable.price * item.count}`
    ).join('\n');

    return `*Carrito de compras:*\n\n${itemList}\n\n*Total a pagar:* $${this.getTotalPrice()}\n\n*¡No envíes este mensaje, es solo un ejemplo!*`;
  }



}
