import { Link } from "react-router-dom";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div>
      <CategoryPreviewContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
          {products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
        {}
      </CategoryPreviewContainer>
    </div>
  );
};

export default CategoryPreview;
