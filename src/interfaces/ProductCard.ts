export interface Product {
  title: string;
  image: string;
  id: string;
}

export interface ProductCardContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
