import React from "react";
import HeaderNavLinks from "./sub-components/HeaderNavLinks";

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
       <HeaderNavLinks/>
       
      </nav>
    </div>
  );
};

export default NavMenu;
