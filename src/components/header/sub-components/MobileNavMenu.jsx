import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/individual-jewellery"}>Individual Jewellery</Link>
        </li>
        <li>
          <Link to={"/diamonds-stones"}>Diamonds Stone</Link>
        </li>
        <li>
          <Link to={"/mint-your-nft"}>Mint Your Product</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
