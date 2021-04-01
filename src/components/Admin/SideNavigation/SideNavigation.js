import React from "react";
import { Link } from "react-router-dom";
import "./SideNavigation.css";
const SideNavigation = () => {
  const url = window.location.href.split("/")[3];
  
  return (
    <div
      className="bg-primary text-center side_navigation"
      style={{ height: "100vh" }}
    >
      <Link to="/admin" className={url === "admin" ? "active" : ""}>
        Admin
      </Link>
      <br />
      <Link to="/manage" className={url === "manage" ? "active" : ""}>
        Manage
      </Link>
    </div>
  );
};

export default SideNavigation;
