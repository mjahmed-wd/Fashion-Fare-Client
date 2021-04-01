import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Home/Search/Search";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import AdminPanel from "./components/Admin/AdminPanel/AdminPanel";
import ManageProduct from "./components/Admin/ManageProduct/ManageProduct";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Container } from "react-bootstrap";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({ isSignedIn: false });
  return (
    <Router>
      <UserContext.Provider value={[user, setUser]}>
        <div className="text_font">
          <Header />
          <Container>
            <Switch>
              <Route exact path="/">
                <Search />
                <Home />
              </Route>
              <Route exact path="/checkout">
                <CheckOut />
              </Route>
              <PrivateRoute exact path="/admin">
                <AdminPanel />
              </PrivateRoute>
              <PrivateRoute exact path="/manage">
                <ManageProduct />
              </PrivateRoute>
              <Route exact path="/login">
                <Login />
              </Route>
              <PrivateRoute exact path="/orders">
                <Order />
              </PrivateRoute>
              <Route path="*">
                <h1>Page not found</h1>
              </Route>
            </Switch>
          </Container>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
