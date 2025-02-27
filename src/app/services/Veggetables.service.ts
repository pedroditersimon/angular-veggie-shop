import { Injectable } from '@angular/core';
import { VegetableType } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class VeggetablesService {

  vegetables: Array<VegetableType> = [
    {
      id: 0,
      name: 'Zanahoria',
      price: 1500,
      image: 'assets/veggetables/carrot.jpg',
      description: "Crujiente y dulce, rica en vitamina A, perfecta para ensaladas y snacks."
    },
    {
      id: 1,
      name: 'Tomate',
      price: 2000,
      image: 'assets/veggetables/tomato.jpg',
      description: "Jugoso y versátil, ideal para salsas, ensaladas y platos frescos."
    },
    {
      id: 2,
      name: 'Lechuga',
      price: 1200,
      image: 'assets/veggetables/lettuce.jpg',
      description: "Hojas frescas y crujientes, base esencial para ensaladas y sandwiches."
    },
    {
      id: 3,
      name: 'Brócoli',
      price: 2500,
      image: 'assets/veggetables/broccoli.jpg',
      description: "Rico en nutrientes y antioxidantes, perfecto para salteados y sopas."
    },
    {
      id: 4,
      name: 'Pepino',
      price: 1800,
      image: 'assets/veggetables/cucumber.jpg',
      description: "Refrescante y bajo en calorías, ideal para ensaladas y bebidas."
    }
  ];

  getById(id: number): VegetableType | undefined {
    return this.vegetables.find(vegetable => vegetable.id === id);
  }
}
