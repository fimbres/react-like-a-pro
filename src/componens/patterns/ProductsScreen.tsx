import { ProductCard } from "./ProductCard"

import { products } from "../../data/products";

import { useCart } from "../../hooks/useCart";

export const ProductsScreen = () => {
  const { cart, onProductQuantityChange } = useCart();

  return (
    <div>
      <h1>All Products</h1>
      <div className="products-holder">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            className='bg-dark'
            value={cart[product.id]?.quantity || 0}
            onChange={q => onProductQuantityChange(product, q)}
          >
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
      {Object.keys(cart).length > 0 && (
        <div className="shopping-cart">
          {Object.entries(cart).map(([key, product]) => (
            <ProductCard 
              key={key}
              product={product}
              value={product.quantity || 0}
              onChange={q => onProductQuantityChange(product, q)}
            >
              <ProductCard.Image />
              <ProductCard.Buttons />
            </ProductCard>
          ))}
        </div>
      )}
    </div>
  )
}
