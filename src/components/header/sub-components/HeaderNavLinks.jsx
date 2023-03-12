import React from "react";
import { Link } from "react-router-dom";
import { routesLinks } from "../../../data";
const HeaderNavLinks = () => {
  return (
    <>
      <ul>
        {routesLinks.map((route, index) => {
          return (
            <li key={index}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HeaderNavLinks;
