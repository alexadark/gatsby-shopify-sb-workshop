import React, { createContext } from "react";

const defaultValues = {
  cart: [],
  addToCart: () => console.log("added to cart"),
};

export const StoreContext = createContext(defaultValues);

export const StoreProvider = ({ children }) => {
  const addToCart = () => {
    console.log("added to cart");
  };

  return (
    <StoreContext.Provider value={{ ...defaultValues }}>
      {children}
    </StoreContext.Provider>
  );
};
