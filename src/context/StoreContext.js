import React, { createContext, useState, useEffect } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
});

const defaultValues = {
  cart: [],
  addToCart: () => {},
  client,
};

export const StoreContext = createContext(defaultValues);

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState({});

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

      //Buy now button
      //if we are in the browser we open the checkout page for this variant product
      isBrowser && window.open(newCheckout.webUrl, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StoreContext.Provider value={{ ...defaultValues, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};
