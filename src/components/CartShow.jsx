import styles from "../static/style/cartList.module.css";
// import styles from "../app.module.scss";

function CartShow({ id, details, handleRemoveCartClick }) {
  const { img, title, description, price } = details;

  const handleRemoveClick = () => {
    handleRemoveCartClick(id);
  };

  return (
    <li className={styles.row}>
      <div className={(styles.col, styles.left)}>
        <div className={styles.thumbnail}>
          <a href="#">
            <img src={img} style={{ width: "300px" }} alt="product.name" />
          </a>
        </div>
        <div className={styles.detail}>
          <div className={styles.name}>
            <a href="#">{title}</a>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>${price}</div>
        </div>
      </div>

      <div className={(styles.col, styles.right)}>
        <div className={styles.quantity}>
          <input type="number" className={styles.quantity} value={1} />
        </div>
        <div className={styles.remove} onClick={handleRemoveClick}>
          <svg
            version="1.1"
            className={styles.close}
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </li>
  );
}

export default CartShow;
