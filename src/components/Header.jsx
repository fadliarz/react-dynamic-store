import styles from "../appStyle.module.scss";

import cart from "../static/img/cart.png";

function Header({ handleCartClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogo}>
          <h1 className={styles.logo}>Pet Store</h1>
        </div>
        <nav className={styles.headerNavigation}>
          <a href="#">About</a>
          <a onClick={handleCartClick} className={styles.linkButton}>
            My Cart &nbsp;
            <img src={cart} style={{ width: "20px" }} alt="My Cart" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
