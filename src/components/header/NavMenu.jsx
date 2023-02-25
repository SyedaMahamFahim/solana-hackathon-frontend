import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/individual-jewellery"}>Individual Jewellery</Link>
          </li>
          <li>
            <Link to={"/diamonds-stones"}>Diamonds Stone</Link>
          </li>
          <li>
            <Link to={"/mint-your-nft"}>Mint Your NFT</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
