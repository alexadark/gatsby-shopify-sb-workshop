import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "gatsby";

export const CartIcon = () => {
  const { checkout } = useContext(StoreContext);
  const qty = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <Link to="/cart">
      <div className="relative ">
        {qty > 0 && (
          <div className="absolute flex items-center justify-center w-5 h-5 text-white bg-teal-500 rounded-full left-3 bottom-3">
            {qty}
          </div>
        )}
        <FaShoppingCart className="text-2xl" />
      </div>
    </Link>
  );
};
