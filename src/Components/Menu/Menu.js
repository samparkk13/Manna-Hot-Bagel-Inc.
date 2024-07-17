import React from 'react';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="separator-wrapper">
        <hr className="separator" />
        <span className="menu-text">Menu</span>
        <hr className="separator" />
      </div>
      <img src={"Images/onlineMenu1.jpeg"} alt="Menu" className="menu-image" />
      <img src={"Images/onlineMenu2.jpeg"} alt="Menu" className="menu-image" />
    </div>
  );
}

export default Menu;