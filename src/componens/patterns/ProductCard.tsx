import { type FC, createContext, useContext } from "react";

import { useCounter } from "../../hooks/useCounter";
import { ProductCardContextProps, ProductCardProps } from "../../interfaces/ProductCard";

const ProductCardContext = createContext({} as ProductCardContextProps);
const { Provider } = ProductCardContext;

export const ProductCard = ({ children, product, className, value = 0, onChange }: ProductCardProps) => {
  const { counter, increaseBy } = useCounter({ onChange, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={"product-card " + className}>
        {children}
      </div>
    </Provider>
  );
};

const ProductImage: FC = ({ className }: { className?: string }) => {
  const { product } = useContext(ProductCardContext);

  return (
    <img className={"product-img " + className} src={product.image} />
  )
}

const ProductTitle: FC = ({ className }: { className?: string }) => {
  const { product } = useContext(ProductCardContext);

  return (
    <h3 className={"product-description " + className}>{product.title}</h3>
  )
}

const ProductButtonsContainer: FC = ({ className }: { className?: string }) => {
  const { counter, increaseBy } = useContext(ProductCardContext);

  return (
    <div className={"buttons-container " + className}>
      <button className="button-minus" onClick={() => increaseBy(-1)}>-</button>
      <span className="count-label">{counter}</span>
      <button className="button-add" onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtonsContainer;
