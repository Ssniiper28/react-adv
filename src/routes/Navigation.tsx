import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import logo from "../logo.svg"
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <ul>
            <img src={logo} alt="React Logo" />
            <li>
              <NavLink to="/">Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<h1>ABOUT</h1>}/>
          <Route path="/users" element={<h1>USERS</h1>}/>
          <Route path="/" element={<ShoppingPage/>}/>
        </Routes>
      </div>
    </Router>
      
  );
}