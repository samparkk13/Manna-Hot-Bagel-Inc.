import React, { useState } from 'react';

const Menu = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case 'Bagel':
        return (
          <div className="menu-section">
            <h2 style={{ fontSize: "2.0em" }}>Bagel</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>Our Bagels are Baked on Premises.
                They are Made of the Finest Ingredients.
            </p>
            <br />
            <br />

            <ul>
              <li style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                Our Bagel Variety
              </li>
              <p>Plain, Whole Wheat, Whole Wheat Everything, Salt, Onion, Garlic,
                Sesame, Egg, Egg Everything, Poppy, Cinnamon Raisin, Multi Grain, Sunflower Flat Bagels</p>
            </ul>
            <br />
            <br />

            <ul>
              <li style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                Your Choice of Any of the Bagels: <span style={{ fontWeight: 'normal' }}>$1.50 each</span>
              </li>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>Bialy Flat Bagels: <span className="bagel-price">$2.00</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Topped with sesame seeds for a nutty flavor.</p>
                  </div>
                  <div className="bagel-item">
                    <li>1/2 Dozen Bagels:  <span className="bagel-price">$9.00</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>A blend of poppy seeds, sesame seeds, garlic, onion, and salt.</p>
                  </div>
                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>1 Dozen Bagels: <span className="bagel-price">$18.00</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Sweet and chewy with raisins and a hint of cinnamon.</p>
                  </div>
                </div>
              </div>
              <br />

              <ul>
                <li style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                    Bagel with:
                </li>
                <div className="bagel-options">
                  <div className="bagel-left">
                    <div className="bagel-item">
                        <li>Extras: Bialy, Flat <span className="bagel-price">$0.50</span></li>
                    </div>
                    <div className="bagel-item">
                        <li>Butter or Jelly <span className="bagel-price">$3.50</span></li>
                    </div>
                    <div className="bagel-item">
                        <li>Lox Spread <span className="bagel-price">$5.50</span></li>
                    </div>
                    <div className="bagel-item">
                        <li>Nova & Cream Cheese <span className="bagel-price">$10.99</span></li>
                    </div>
                    </div>
                    <div className="bagel-right">
                    <div className="bagel-item">
                        <li>Croissant <span className="bagel-price">$1.00</span></li>
                    </div>
                    <div className="bagel-item">
                        <li>Butter and Jelly <span className="bagel-price">$3.50</span></li>
                    </div>
                    <div className="bagel-item">
                        <li>Cream Cheese <span className="bagel-price">$3.50</span></li>
                    </div>
                </div>
              </div>
              </ul>
              <div className="bagel-item">
                <li style={{color: '#C41E3A', fontWeight: 'bold'}}>*Flavored Cheam Cheese <span className="bagel-price">$4.50</span></li>
                <p style={{ fontSize: '0.7em', textAlign: 'left' }}>(Vegetable, Scallion, Olive, Strawberry, Raisin Walnut, Jalapeno)</p>
              </div>
            </ul>
          </div>
        );
      case 'Manna Breakfast':
        return <div className="menu-section">
            <h2 style={{ fontSize: "2.0em" }}>Manna Breakfast</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
                Served All Day. On a Roll, Bagel, Bread, Hero, Croissant, Wrap
            </p>
            <br />
            <br />

            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>Egg and Cheese: <span className="bagel-price">$5.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Bacon, Ham, or Sausage (1 Choice)</p>
                  </div>
                  <div className="bagel-item">
                    <li>Egg and Cheese:  <span className="bagel-price">$6.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Beef Sausage, Turkey, Turkey Bacon, Turkey Sausage (1 choice)</p>
                  </div>
                  <div className="bagel-item">
                    <li>Bacon, Egg White and Cheese  <span className="bagel-price">$7.50</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                  <div className="bagel-item">
                    <li>Bacon and Cream Cheese  <span className="bagel-price">$6.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                  <div className="bagel-item">
                    <li>Grilled Cheese <span className="bagel-price">$5.00</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>w/ Bacon, Ham, Sausage (1 choice)</p>
                  </div>
                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>Big Jim (Hero): <span className="bagel-price">$13.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Bacon, Ham, Egg, Cheese</p>
                  </div>
                  <div className="bagel-item">
                    <li>Big Fat Freddy <span className="bagel-price">$9.50</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Bacon and Sausage, Eggs, and Cheese</p>
                  </div>
                  <div className="bagel-item">
                    <li>Western Omelette  <span className="bagel-price">$8.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                  <div className="bagel-item">
                    <li>Hash Brown  <span className="bagel-price">$3.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                  <div className="bagel-item">
                    <li>Hot Oat Meal  <span className="bagel-price">$4.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                </div>
              </div>
              <ul>
                <li style={{ fontSize: "1.0em" }}>
                    Extra Cheese $0.50, Croissant $1.00, Egg $1.00
                </li>
              </ul>
            </ul>
            <br />
        </div>;
      case 'Main Menu':
        return <div className="menu-section"><h1>Dinner Menu</h1>{/* Add dinner menu content here */}</div>;
      case 'dessert':
        return <div className="menu-section"><h1>Dessert Menu</h1>{/* Add dessert menu content here */}</div>;
      default:
        return (
            <div className="quadrant-container">
            <div className="quadrant" onClick={() => setSelectedSection('Bagel')}>
              {/* <img src='Images/bagelImage.jpeg' alt="Bagel" className="quadrant-image" /> */}
              {/* <div className="quadrant-text">BAGEL</div> */}
              <div>BAGEL</div>
            </div>
            <div className="quadrant" onClick={() => setSelectedSection('Manna Breakfast')}>Manna Breakfast</div>
            <div className="quadrant" onClick={() => setSelectedSection('Main Menu')}>Main Menu</div>
            <div className="quadrant" onClick={() => setSelectedSection('dessert')}>Dessert</div>
          </div>
        );
    }
  };

  return (
    <div className="menu-container">
      <div className="separator-wrapper">
        <hr className="separator" />  
        <span className="menu-text">Menu</span> 
        <hr className="separator" />
      </div>
      {selectedSection && (
        <button className="back-button" onClick={() => setSelectedSection(null)}>Back to Menus</button>
      )}
      {renderContent()}
    </div>
  );
}

export default Menu;
