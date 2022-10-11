import React, { createContext, useState, useEffect } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
});

const defaultValues = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  client,
  //set a default value for checkout
  checkout: {
    lineItems: [],
  },
};

export const StoreContext = createContext(defaultValues);

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout); //take the default value from above

  //check if it's a browser
  const isBrowser = typeof window !== "undefined";

  const initializeCheckout = async () => {
    try {
      //check if checkout id exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null;

      let newCheckout = null;

      if (currentCheckoutId) {
        //if checkout id exists, fetch checkout from Shopify
        newCheckout = await client.checkout.fetch(currentCheckoutId);
      } else {
        //if it doesn't exist, create new checkout and add it to localStorage
        newCheckout = await client.checkout.create();
        isBrowser && localStorage.setItem("checkout_id", newCheckout.id);
      }
      //set checkout to state
      setCheckout(newCheckout);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initializeCheckout();
  }, []);

  const addToCart = async (variantId, quantity = 1) => {
    try {
      const lineItems = [
        {
          variantId,
          quantity,
        },
      ];
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      );
      setCheckout(newCheckout); //update checkout state in order to include the new lineItems
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (lineItemId) => {
    try {
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        lineItemId,
      ]);
      setCheckout(newCheckout);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StoreContext.Provider
      value={{ ...defaultValues, addToCart, removeFromCart, checkout }}
    >
      {children}
    </StoreContext.Provider>
  );
};
