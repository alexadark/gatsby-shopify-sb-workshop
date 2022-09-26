import React from "react";
import { FaShoppingCart as CartIcon } from "react-icons/fa";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="py-4 text-white bg-black">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-semibold">
          <Link to="/">Gatsby - Shopify</Link>
        </h1>

        <Link to="/cart">
          <div className="relative ">
            <CartIcon className="text-2xl" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
