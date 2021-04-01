import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { handleSignOut } from "../Login/FirebaseRefectored";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogOut = () => {
    handleSignOut().then((res) => setUser(res));
  };
  let history = useHistory();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-dark bg-primary"
        sticky="top"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>Fashion Fare</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => history.push("/orders")}>
                Orders
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/admin")}>Admin</Nav.Link>
              <Nav.Link>Deals</Nav.Link>
              {user.isSignedIn === !true && (
                <Link
                  to="/login"
                  style={{
                    color: "white",
                    backgroundColor: "#EFA522",
                    borderRadius: "5px",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  Login
                </Link>
              )}

              {user.isSignedIn === true && (
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <button
                      onClick={() => handleLogOut()}
                      className="btn btn-primary"
                    >
                      Log Out
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
