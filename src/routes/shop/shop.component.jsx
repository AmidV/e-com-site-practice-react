import { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => (
        <div key={id}>
          <ProductCard name={name} imageUrl={imageUrl} price={price} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
