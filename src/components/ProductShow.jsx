import styles from "../appStyle.module.scss";

import cart from "../static/svg/cart.svg";

function ProductShow({ id, details, handleAddToCartClick }) {
  const { img, title, description, price } = details;

  const handleClick = () => {
    handleAddToCartClick(id);
  };

  return (
    <div className={styles.gridColumn}>
      <a className={styles.product} href="#">
        <div className={styles.productImage}>
          <img src={img} style={{ width: "350px", height: "300px" }} />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{title}</h2>
            <p className={styles.productPrice}>{description}</p>
            <p className={styles.productPrice}>${price}</p>
          </div>
          <button onClick={handleClick} className={styles.productAction} style={{backgroundColor: "white"}}>
            <img src={cart} alt="Add to cart" />
          </button>
        </div>
      </a>
    </div>
  );
}

export default ProductShow;
