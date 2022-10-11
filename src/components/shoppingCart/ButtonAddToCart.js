import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";

export const ButtonAddToCart = ({ variantId }) => {
  const { addToCart } = useContext(StoreContext);

  return (
    <button
      onClick={() => {
        addToCart(variantId);
      }}
      className="btn"
    >
      Add to cart
    </button>
  );
};
