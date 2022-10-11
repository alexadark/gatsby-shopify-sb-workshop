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
      const newCheckout = await client.checkout.create();
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

      console.log("newCheckout", newCheckout);
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
