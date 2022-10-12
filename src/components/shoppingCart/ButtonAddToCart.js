import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";

export const ButtonAddToCart = ({ variantId }) => {
  const { addToCart, client } = useContext(StoreContext);

  return (
    <button
      onClick={() => {
        addToCart(variantId);
        console.log("client", client);
      }}
      className="btn"
    >
      Add to cart
    </button>
  );
};
