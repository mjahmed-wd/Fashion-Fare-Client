import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Link to="/">
          <Navbar.Brand>Fashion Fare</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => history.push("/home")}>Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/orders")}>Orders</Nav.Link>
            <Nav.Link onClick={() => history.push("/Admin")}>Admin</Nav.Link>
            <Nav.Link>Deals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
