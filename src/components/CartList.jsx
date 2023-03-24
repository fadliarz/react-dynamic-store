import styles from "../static/style/cartList.module.css";
// import styles from "../app.module.scss";

import CartShow from "./CartShow";

function CartList({ carts, handleCartClick, handleRemoveCartClick }) {
  const renderedCarts = carts.map((cart, index) => {
    return (
      <CartShow
        id={index}
        details={{
          img: cart.img,
          title: cart.title,
          description: cart.description,
          price: cart.price,
        }}
        handleRemoveCartClick={handleRemoveCartClick}
      />
    );
  });

  let subTotal = 0;
  carts.forEach((cart) => {
    subTotal += cart.price;
  });

  const tax = 0;
  const discount = 0;

  return (
    <div>
      <div id="app">
        <header className={styles.container}>
          <h1>Shopping Cart</h1>
          <ul className={styles.breadcrumb}>
            <li>Home</li>
            <li>Shopping Cart</li>
          </ul>
          <span className={styles.count}>
            {carts.length} {carts.length > 1 ? "items" : "item"} in the bag
          </span>
        </header>

        <section className={styles.container}>
          <div>
            <ul className={styles.products}>{renderedCarts}</ul>
          </div>

          <div className={styles.emptyProduct}>
            <br />
            <h3>
              {carts.length == 0 ? "There is no product in your cart." : ""}
            </h3>
            <br />
            <button onClick={handleCartClick}>Shopping now</button>
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.promotion}>
            <label>Have A Promo Code?</label>
            <input type="text" id="promoCode" /> <button type="button" />
          </div>
          <div className={styles.summary}>
            <ul>
              <li>
                Subtotal
                <span>${subTotal}</span>
              </li>
              <li>
                Discount
                <span>${discount}</span>
              </li>
              <li>
                Tax
                <span>${tax}</span>
              </li>
              <li className={styles.total}>
                Total
                <span>${subTotal + tax - discount}</span>
              </li>
            </ul>
          </div>
          <div className={styles.checkout}>
            <button type="button">Check Out</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CartList;
