import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";
import Layout from "~/components/Layout";
import { CartItem } from "~/components/shoppingCart";

const Cart = () => {
  const { checkout } = useContext(StoreContext);
  console.log("checkout", checkout);
  return (
    <Layout>
      <div className="container mx-auto my-10">
        <h1>Cart</h1>
        <div>
          {checkout.lineItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
