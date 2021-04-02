import React from "react";
import { Link } from "react-router-dom";
import "./SideNavigation.css";
const SideNavigation = () => {
  const url = window.location.href.split("/")[3];
  
  return (
    <div
      className="bg-primary text-center side_navigation"
    >
      <Link to="/admin" className={url === "admin" ? "active" : ""}>
        Add Product
      </Link>
      <br />
      <Link to="/manage" className={url === "manage" ? "active" : ""}>
        Manage Products
      </Link>
    </div>
  );
};

export default SideNavigation;
