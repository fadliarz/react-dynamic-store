import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartList from "./components/CartList";

import { useState } from "react";

import cat from "./static/img/cat.jpg";
import dog from "./static/img/dog.jpg";
import trex from "./static/img/trex.jfif";

function App() {
  const [isCart, toggleIsCart] = useState(false);
  const [carts, setCarts] = useState([]);

  const products = [
    { img: cat, title: "Cat", description: "Cheap cat", price: 50 },
    { img: dog, title: "Puppy", description: "Cheap puppy", price: 45 },
    { img: trex, title: "Trex", description: "Trex Bali", price: 45 },
    { img: cat, title: "Cat", description: "Cheap cat", price: 50 },
    { img: dog, title: "Puppy", description: "Cheap puppy", price: 45 },
    { img: trex, title: "Trex", description: "Trex Bali", price: 45 },
  ];

  const handleCartClick = () => {
    toggleIsCart(!isCart);
  };

  const handleAddToCartClick = (id) => {
    const updatedCarts = [...carts, products[id]];
    console.log(updatedCarts);
    setCarts(updatedCarts);
  };

  const handleRemoveCartClick = (id) => {
    const updatedCarts = carts.filter((cart, index) => {
      return index != id;
    });

    setCarts(updatedCarts);
  };

  if (isCart) {
    return (
      <CartList
        carts={carts}
        handleCartClick={handleCartClick}
        handleRemoveCartClick={handleRemoveCartClick}
      />
    );
  }

  return (
    <>
      <Header handleCartClick={handleCartClick} />
      <main>
        <ProductList
          products={products}
          handleAddToCartClick={handleAddToCartClick}
        />
        <Footer />
      </main>
    </>
  );
}

export default App;


