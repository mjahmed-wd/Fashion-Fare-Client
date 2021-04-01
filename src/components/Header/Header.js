import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { handleSignOut } from "../Login/SignOut";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogOut = () => {
    handleSignOut().then((res) => setUser(res));
  };
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

          {/* {user.isSignedIn === true && <Nav.Link>{user.name}</Nav.Link>} */}

          {user.isSignedIn === true && (
            <NavDropdown title={user.name} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <button onClick={() => handleLogOut()}>Log Out</button>
              </NavDropdown.Item>
            </NavDropdown>
          )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
