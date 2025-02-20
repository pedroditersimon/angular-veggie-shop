import { Injectable } from '@angular/core';
import { CartItem, VegetableType } from '../types/types';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<CartItem> = [];

  addToCart(veg: VegetableType) {
    const existingItem = this.getCartItem(veg.id);

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
  removeOneFromCart(id: number): boolean {
    const existingItem = this.getCartItem(id);

    // return if item dosnt exists
    if (!existingItem) return false;

    // delete and return if item dosnt have any count
    if (existingItem.count === 0) {
      this.removeAllFromCart(id);
      return false;
    }

    // remove count
    this.setItem({
      ...existingItem,
      count: existingItem.count - 1
    });
    return true;
  }

  removeAllFromCart(id: number) {
    this.cart = this.cart.filter(item => item.veggetable.id !== id);
  }

  getCartItem(id: number) {
    return this.cart.find(item => item.veggetable.id === id);
  }

  // replace existing item with the given one, with same id
  private setItem(item: CartItem) {
    this.cart = this.cart.map(cartItem => {
      if (item.veggetable.id === cartItem.veggetable.id)
        return item
      else return cartItem;
    });
  }
}
