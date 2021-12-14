import React from 'react';
import '../css/header.css';
import logo from "../assets/logo.png";

function Header(props) {

  return (
    <>
      <header className="header">
        <div className="content">
          
          <a href="/">
            <img src={logo} alt="Sistema Clientes"/>
          </a>

          <nav id="menu">
            <ul>
            {props.options}
            </ul>
          </nav>

        </div>
      </header>
    </>
  );
}

export default Header;
