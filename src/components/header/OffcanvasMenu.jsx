import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const OffcanvasMenu = ({ activeState, getActiveState }) => {
  return (
    <div className={`clickable-mainmenu ${activeState ? "inside" : ""}`}>
      <div className="clickable-mainmenu-icon">
        <button
          className="clickable-mainmenu-close"
          onClick={() => getActiveState(false)}
        >
          <span className="pe-7s-close"></span>
        </button>
      </div>
      <div className="side-logo">
        <Link to={"/"}>
          <img alt="" src={"/assets/img/logo/logo.png"} />
        </Link>
      </div>
      {/* nav menu*/}
      <NavMenu sidebarMenu={true} />

  
    </div>
  );
};


export default OffcanvasMenu;
