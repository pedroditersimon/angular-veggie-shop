import { Injectable } from '@angular/core';
import { VegetableType } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<VegetableType> = [];

  addToCart(vegetable: VegetableType) {
    this.cart.push({ ...vegetable });
  }
}
