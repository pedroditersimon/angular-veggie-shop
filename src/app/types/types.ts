export interface VegetableType {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}


export interface CartItemType {
  count: number;
  veggetable: VegetableType;
}


export type ThemeTypes = "default" | "dark-theme" | "luna-theme" | "aurora-theme";
