import { ReactNode } from "react";

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

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardProps {
  children: ((message: string) => ReactNode) | ReactNode,
  product: Product,
  className?: string,
  value?: number;
  initialValues?: InitialValues;
  onChange?: (value: number) => void;
}
