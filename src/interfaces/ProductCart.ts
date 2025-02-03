import { Product } from "./ProductCard";

export interface ProductInCart extends Product {
  quantity: number;
}

export interface ShoppingCart {
  [key: string]: ProductInCart;
}
