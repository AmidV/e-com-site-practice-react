import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoryMap } from "../../store/categories/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  //   const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoryMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h1 className="title">{category.toUpperCase()}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
