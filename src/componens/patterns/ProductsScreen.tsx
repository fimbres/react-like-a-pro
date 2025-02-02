import { Product } from "../../interfaces/ProductCard";
import { ProductCard } from "./ProductCard"

const dummyData: Product[] = [
  {
    id: "1",
    image: "./car.webp",
    title: "Tundra 2025"
  },
  {
    id: "2",
    image: "./car2.png",
    title: "CRV 2015"
  },
  {
    id: "3",
    image: "./car3.png",
    title: "C200 2017"
  },
];

export const ProductsScreen = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="products-holder">
        {dummyData.map(product => (
          <ProductCard key={product.id} product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
