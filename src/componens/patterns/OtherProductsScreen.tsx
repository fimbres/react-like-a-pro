import { ProductCard } from "./ProductCard"

import { products } from "../../data/products";

export const OtherProductsScreen = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="products-holder">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            className='bg-dark'
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {() => (
              <>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
              </>
            )}
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
