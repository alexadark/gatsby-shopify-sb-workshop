import React, { createContext } from "react";

const defaultValues = {
  cart: [],
  addToCart: () => {},
};

export const StoreContext = createContext(defaultValues);

export const StoreProvider = ({ children }) => {
  const addToCart = () => {
    console.log("added to cart");
  };

  return (
    <StoreContext.Provider value={{ ...defaultValues, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};
