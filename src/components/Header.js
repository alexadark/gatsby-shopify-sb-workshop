import React from "react";
import { CartIcon } from "~/components/shoppingCart";
import Menu from "./Menu";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="py-4 text-white bg-black">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-semibold">
          <Link to="/">Gatsby - Shopify</Link>
        </h1>
        <Menu />
        <Link to="/cart">
          <div className="relative ">
            <CartIcon />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
