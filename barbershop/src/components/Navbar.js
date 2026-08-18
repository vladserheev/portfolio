import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="logo">LOGO</h1>

        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    );
  }
}

export default Navbar;