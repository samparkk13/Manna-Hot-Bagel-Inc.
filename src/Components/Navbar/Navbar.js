import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="#home"><h1>Home</h1></a>
        <a href="#about"><h1>About</h1></a>
        <a href="#menu"><h1>Menu</h1></a>
        <a href="#contact"><h1>Contact</h1></a>
      </div>
    </nav>
  );
}

export default Navbar;
