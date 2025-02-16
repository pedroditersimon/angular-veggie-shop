import { Component } from '@angular/core';

interface VegetableType {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  vegetables: Array<VegetableType> = [
    { id: 0, name: 'Zanahoria', price: 1500, image: 'assets/veggetables/carrot.jpg' },
    { id: 1, name: 'Tomate', price: 2000, image: 'assets/veggetables/tomato.jpg' },
    { id: 2, name: 'Lechuga', price: 1200, image: 'assets/veggetables/lettuce.jpg' },
    { id: 3, name: 'Brócoli', price: 2500, image: 'assets/veggetables/broccoli.jpg' },
    { id: 4, name: 'Pepino', price: 1800, image: 'assets/veggetables/cucumber.jpg' }
  ];



  cart: Array<VegetableType> = [];

  addToCart(vegetable: VegetableType) {
    this.cart.push(vegetable);
  }
}
