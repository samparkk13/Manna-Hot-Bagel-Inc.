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
                Your Choice of Any of the Bagels: <span style={{ fontWeight: 'normal', fontSize: '0.7em' }}>$1.50 each</span>
              </li>
              <br/>
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
                        <li>Butter or Jelly <span className="bagel-price">$2.50</span></li>
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
                <li style={{color: '#C41E3A', fontWeight: 'bold'}}>*Flavored Cream Cheese <span className="bagel-price">$4.50</span></li>
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
            <h2 style={{ fontSize: "2.0em" }}>Manna Breakfast - Hot Platter</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
                Any Style Eggs, w/ Home Fries, Toast
            </p>
            <br/>
            <br/>
            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>1. Cheese Omelet Platter <span className="bagel-price">$9.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                  <div className="bagel-item">
                    <li>2. Meat Platter <span className="bagel-price">$9.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>2 Eggs, Ham or Bacon or Sausage (1 Choice)</p>
                  </div>
                  <div className="bagel-item">
                    <li>3. Veggie Omelet <span className="bagel-price">$9.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Tomatoes, Peppers, Spinach, Mushrooms, Onions, and Swiss Cheese</p>
                  </div>
                  <div className="bagel-item">
                    <li>4. Western Omelet Platter <span className="bagel-price">$9.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Ham, Onions, and Peppers</p>
                  </div>
                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>5. Greek Omelet Platter <span className="bagel-price">$10.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Tomatoes, Feta, Spinach, Mushrooms</p>
                  </div>
                  <div className="bagel-item">
                    <li>6. Spanish Omelet Platter <span className="bagel-price">$9.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>Bacon, Cheddar Cheese, Onions, Peppers</p>
                  </div>
                  <div className="bagel-item">
                    <li>7. Manna Healthy Omelet <span className="bagel-price">$9.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>3 Eggs White, Spinach, Onions, Avocado</p>
                  </div>
                </div>
              </div>
            </ul>

            <br />
            <h2 style={{ fontSize: "2.0em" }}>Eggs White on a Wrap</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
            </p>
            <br/>
            <br/>
            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>8. 3 Eggs White <span className="bagel-price">$7.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Spinach, Onion, Avocado</p>
                  </div>
                  <div className="bagel-item">
                    <li>9. 3 Eggs White <span className="bagel-price">$7.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Spinach, Green Pepper, Onion</p>
                  </div>
                  <div className="bagel-item">
                    <li>10. 3 Eggs White <span className="bagel-price">$6.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Cheese</p>
                  </div>
                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>11. 3 Eggs White <span className="bagel-price">$8.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Mushroom, Tomato, Spinach, Feta Cheese, Spinach Wrap</p>
                  </div>
                  <div className="bagel-item">
                    <li>12. 3 Eggs White <span className="bagel-price">$8.99</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Turkey Sausage or Turkey Bacon</p>
                  </div>
                </div>
              </div>
            </ul>

            <br />
            <h2 style={{ fontSize: "2.0em" }}>Pancake & French Toast</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
            </p>
            <br/>
            <br/>
            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>13. Pancakes (3pcs) <span className="bagel-price">$7.00</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                  <div className="bagel-item">
                    <li>14. Pancakes with Meat <span className="bagel-price">$10.50</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Ham or Bacon or Sausage</p>
                  </div>
                  <div className="bagel-item">
                    <li>15. Pancakes <span className="bagel-price">$13.50</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ 2 Eggs and Meat</p>
                  </div>
                  <div className="bagel-item">
                    <li>16. French Toast (3pcs)<span className="bagel-price">$7.00</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>17. French Toast with Meat<span className="bagel-price">$10.50</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Ham or Bacon or Sausage</p>
                  </div>
                  <div className="bagel-item">
                    <li>18. French Toast<span className="bagel-price">$13.50</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ 2 Eggs and Meat</p>
                  </div>
                  <div className="bagel-item">
                    <li>19. Waffle (1pcs) <span className="bagel-price">$7.00</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}></p>
                  </div>
                  <div className="bagel-item">
                    <li>20. Waffle with Meat <span className="bagel-price">$10.50</span></li>
                    <p style={{ fontSize: '0.7em', textAlign: 'left'}}>+ Ham or Bacon or Sausage</p>
                  </div>
                </div>
              </div>
            </ul>
        </div>;
      case 'Main Menu':
        return <div className="menu-section">
            <h2 style={{ fontSize: "2.0em" }}>Manna Combination Special</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
                From Boar's Head Brand
            </p>
            <br />
            <br />

            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">21. Chicken Cutlet</div>
                      <div className="sandwich-description">Lettuce, Tomato, Jalapeno, Russian Dressing</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <div className="price-header">Roll</div>
                        <span className="bagel-price">$9.99</span>
                      </div>
                      <div className="price-group">
                        <div className="price-header">Wrap/Hero</div>
                        <span className="bagel-price">$13.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">23. Hot Pastrami</div>
                      <div className="sandwich-description">Muenster Cheese, Roasted Pepper</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <div className="price-header">Roll</div>
                        <span className="bagel-price">$9.99</span>
                      </div>
                      <div className="price-group">
                        <div className="price-header">Wrap/Hero</div>
                        <span className="bagel-price">$13.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">25. Italian Sausage Combo</div>
                      <div className="sandwich-description">Onion, Pepper, Melted Mozzarella, Maninara Sauce</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <div className="price-header">Wrap/Hero</div>
                        <span className="bagel-price">$13.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">27. Meat Ball Parmesan</div>
                      <div className="sandwich-description"></div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <div className="price-header">Roll</div>
                        <span className="bagel-price">$9.99</span>
                      </div>
                      <div className="price-group">
                        <div className="price-header">Wrap/Hero</div>
                        <span className="bagel-price">$13.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">29. Sweet 16</div>
                      <div className="sandwich-description">Honey Turkey, Cheddar, Roasted Pepper, Russian Dressing</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <div className="price-header">Roll</div>
                        <span className="bagel-price">$9.99</span>
                      </div>
                      <div className="price-group">
                        <div className="price-header">Wrap/Hero</div>
                        <span className="bagel-price">$13.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">31. Turkey Supreme</div>
                        <div className="sandwich-description">Hot Turkey Breast, Bacon, Melted Cheddar w/ Gravy</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">33. Chicken Parmesan</div>
                        <div className="sandwich-description">Chicken Cutlet, Mozzarella, Marinara Sauce, Parmesan Cheese</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">35. French Philly Cheese Steak</div>
                        <div className="sandwich-description">Hot Roast Beef, Melted Swiss Cheese, Mushroom with Gravy</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">37. England Philly Cheese Steak</div>
                        <div className="sandwich-description">Hot Roast Beef, Bacon, Melted Cheddar with Gravy</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">39. Rockaway Parkway</div>
                        <div className="sandwich-description">Grilled Pastrami, Bacon, Tomato, Mustard</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">41. Italian Club</div>
                        <div className="sandwich-description">Ham, Salami, Pepperoni, Provolone, Lettuce, Tomato, Oil/Vinegar</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">43. New York 'Jets'</div>
                        <div className="sandwich-description">Chicken Cutlet, Melted Cheese, Bacon with Gravy Toasted Garlic Hero</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">45. New York 'Giants'</div>
                        <div className="sandwich-description">Chicken Cutlet, Honey Turkey Breast, Swiss with Russian Dressing</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">47. Titanic</div>
                        <div className="sandwich-description">Grilled Chicken, Bacon, Swiss Cheese</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">49. Chopped Cheese</div>
                        <div className="sandwich-description">Ground Beef, Onion, Melted Cheese, Lettuce, Tomatoes</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">51. Bench Time</div>
                        <div className="sandwich-description">Hot Roasted Beef, Melted Mozzarella, Grilled Onion and Pepper</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">53. Canarsie Hometown</div>
                        <div className="sandwich-description">Hot Honey Turkey, Melted Mozzarella, Grilled Onion</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">22. Honey Turkey</div>
                        <div className="sandwich-description">Cheddar Cheese, Lettuce, Tomato, Russian Dressing</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">24. Tuna Boat</div>
                        <div className="sandwich-description">Tuna Salad, Lettuce, Tomato, Onion, Coleslaw</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">26. Black Dog</div>
                        <div className="sandwich-description">Grilled Chicken, 2 Eggs, Grilled Onion Pepper, Mozz. Cheese, Mayo, Toast Hero</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">28. Manna Bagel Club</div>
                        <div className="sandwich-description">Virginia Ham, Bacon, Melted Cheddar, Lettuce, Tomato</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">30. Big Billy</div>
                        <div className="sandwich-description">Chicken Cutlet, Melted Mozzarella, Onion Ring</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">32. Bad Boy</div>
                        <div className="sandwich-description">Chicken Cutlet, Bacon, Lettuce, Tomato, Mozzarella Cheese</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">34. Philly Cheese Steak Hot Roast Beef</div>
                        <div className="sandwich-description">Melted Cheese, Onion, Pepper with Gravy</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">36. Philly Steak</div>
                        <div className="sandwich-description">Steak, Melted American Cheese, Grilled Onions and Peppers</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">38. Big Boss</div>
                        <div className="sandwich-description">Hot Roast Beef, Turkey Breast, Alpine Swiss, B.B.Q Sauce</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">40. Canarsie Club</div>
                        <div className="sandwich-description">Hot Salsalito Turkey, Bacon, Lettuce, Tomato, Mayo</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">42. New York 'Yankees'</div>
                        <div className="sandwich-description">Hot Roasted Beef, Bacon, Melted Mozzarella, Lettuce, Tomato</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">44. New York 'Mets'</div>
                        <div className="sandwich-description">Hot Turkey Breast, Bacon, Melted Cheddar, Toasted Garlic Hero</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">46. Turkey Club</div>
                        <div className="sandwich-description">Turkey, Bacon, American Cheese, Lettuce, Tomato</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">48. Monte-Cristo</div>
                        <div className="sandwich-description">Ham & Turkey with Melted Swiss Cheese</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">50. Alpacino</div>
                        <div className="sandwich-description">Grilled Chicken Breast, Melted Swiss Cheese, Lettuce, Tomato</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">52. Hungry Man</div>
                        <div className="sandwich-description">Grilled Pastrami, Melted Swiss Cheese, Fried Onion & Pepper</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">54. Missing You</div>
                        <div className="sandwich-description">Hot Roasted Beef, Bacon, Melted Mozzarella, B.B.Q Sauce</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Wrap/Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>

                </div>
              </div>
            </ul>
            <h2 style={{ fontSize: "2.0em" }}>Famous Manna Burgers</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
                
            </p>
            <br />
            <br />
            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">55. Hamburger</div>
                      <div className="sandwich-description">Lettuce, Tomato</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$6.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">57. Bacon Cheeseburger</div>
                      <div className="sandwich-description">Lettuce, Tomato</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$8.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">59. Bacon Cheeseburger Deluxe</div>
                      <div className="sandwich-description"></div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$12.99</span>
                      </div>
                    </div>
                    </li>
                  </div>


                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">56. Cheeseburger</div>
                      <div className="sandwich-description">Lettuce, Tomato</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$7.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">58. Cheeseburger Deluxe</div>
                      <div className="sandwich-description"></div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                </div>
              </div>
            </ul>


          </div>;
      case 'dessert':
        return <div className="menu-section"><h1>Dessert Menu</h1>{/* Add dessert menu content here */}</div>;
      default:
        return (
            <div className="quadrant-container">
            <div className="quadrant" onClick={() => setSelectedSection('Bagel')}>
              {/* <img src='Images/bagelImage.jpeg' alt="Bagel" className="quadrant-image" /> */}
              {/* <div className="quadrant-text">BAGEL</div> */}
              <div>MANNA BAGELS</div>
            </div>
            <div className="quadrant" onClick={() => setSelectedSection('Manna Breakfast')}>MANNA BREAKFAST</div>
            <div className="quadrant" onClick={() => setSelectedSection('Main Menu')}>MANNA MAIN MENU</div>
            <div className="quadrant" onClick={() => setSelectedSection('dessert')}>MANNA CHEF SPECIAL</div>
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
