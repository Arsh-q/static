import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "./Nav.scss";
import logo from "../../images/logo.svg";
const Nav = styled.nav`
  width: 100%;
  height: 14vh;
  border-bottom: 2px solid #f1f1f1;
  position: fixed;
  padding: 0 20px;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: space-between;
  .logo {
    position: fixed;
    padding: 0.3rem 2rem;
  }
`;

const Navbar = () => {
  return (
    <Nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>MEKVAHAN</h1>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
