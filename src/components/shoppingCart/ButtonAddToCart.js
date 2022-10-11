import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";

export const ButtonAddToCart = () => {
  const { addToCart } = useContext(StoreContext);
  return (
    <button onClick={() => addToCart()} className="btn">
      Add To Cart
    </button>
  );
};
