import { ReactNode, type FC, createContext, useContext } from "react";

import { useCounter } from "../../hooks/useCounter";
import { Product, ProductCardContextProps } from "../../interfaces/ProductCard";

const ProductCardContext = createContext({} as ProductCardContextProps);
const { Provider } = ProductCardContext;

export const ProductCard = ({ children, product }: { children: ReactNode, product: Product }) => {
  const { counter, increaseBy } = useCounter();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className="product-card">
        {children}
      </div>
    </Provider>
  );
};

const ProductImage: FC = () => {
  const { product } = useContext(ProductCardContext);

  return (
    <img className="product-img" src={product.image} />
  )
}

const ProductTitle: FC = () => {
  const { product } = useContext(ProductCardContext);

  return (
    <h3 className="product-description">{product.title}</h3>
  )
}

const ProductButtonsContainer: FC = () => {
  const { counter, increaseBy } = useContext(ProductCardContext);

  return (
    <div className="buttons-container">
      <button className="button-minus" onClick={() => increaseBy(-1)}>-</button>
      <span className="count-label">{counter}</span>
      <button className="button-add" onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtonsContainer;
