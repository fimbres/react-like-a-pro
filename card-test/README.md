# Product Card

This is my Product Card component.

# Example

```js
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
```
