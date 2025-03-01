export interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}


export interface CartItem {
  count: number;
  veggetable: Vegetable;
}


export enum Theme {
  Light = "default",
  Dark = "dark-theme",
  Luna = "luna-theme",
  Orange = "orange-theme",
}
