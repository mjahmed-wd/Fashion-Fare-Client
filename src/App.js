import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Search from "./components/Home/Search/Search";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import AdminPanel from "./components/Admin/AdminPanel/AdminPanel";

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Search />
            <Home/>
          </Route>
          <Route exact path="/checkout">
            <CheckOut/>
          </Route>
          <Route exact path="/admin">
            <AdminPanel page={"AddProduct"}/>
          </Route>
          <Route path="*">
            <h1>Page not found</h1>
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
