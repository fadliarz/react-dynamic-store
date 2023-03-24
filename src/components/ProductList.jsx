import styles from "../appStyle.module.scss";

import ProductShow from "./ProductShow";

function ProductList({ products, handleAddToCartClick }) {
  const renderedProducts = products.map((product, index) => {
    return (
      <ProductShow
        id={index}
        details={{
          img: product.img,
          title: product.title,
          description: product.description,
          price: product.price,
        }}
        handleAddToCartClick={handleAddToCartClick}
      />
    );
  });

  return (
    <div className={styles.responsiveContainer}>
      <div className={styles.grid}>{renderedProducts}</div>
    </div>
  );
}

export default ProductList;
