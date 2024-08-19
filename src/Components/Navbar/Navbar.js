import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="#home"><h1>HOME</h1></a>
        <a href="#about"><h1>ABOUT</h1></a>
        <a href="#menu"><h1>MENU</h1></a>
        <a href="#contact"><h1>CONTACT</h1></a>
        <a href="https://www.ubereats.com/store/manna-hot-bagel/LDjkSj4lX3-iKYuAUER-cA?srsltid=AfmBOopU2085BrtXsQ8_uTFIcEl60hECjBI1cSv_IV_naGYwzuBy_7ay" target="_blank" rel="noopener noreferrer">
          <h1>ORDER</h1>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
