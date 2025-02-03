import { useState } from "react";

import { Product } from "../interfaces/ProductCard";
import { ShoppingCart } from "../interfaces/ProductCart";

export const useCart = () => {
  const [cart, setCart] = useState<ShoppingCart>({});

  const onProductQuantityChange = (product: Product, quantity: number) => {
    let newCart = { ...cart };

    if(quantity === 0) {
      delete newCart[product.id];
    }
    else {
      newCart[product.id] = { ...product, quantity };
    }

    setCart(newCart);
  };

  return {
    cart,
    onProductQuantityChange,
  };
}
