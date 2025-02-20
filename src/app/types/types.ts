export interface VegetableType {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}


export interface CartItem {
  count: number;
  veggetable: VegetableType;
}
