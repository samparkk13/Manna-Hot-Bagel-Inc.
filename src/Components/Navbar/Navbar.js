import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="#home"><h1>HOME</h1></a>
        <a href="#about"><h1>ABOUT</h1></a>
        <a href="#menu"><h1>MENU</h1></a>
        <a href="#contact"><h1>CONTACT</h1></a>
      </div>
    </nav>
  );
}

export default Navbar;
