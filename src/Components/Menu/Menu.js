import React, { useState } from 'react';

const Menu = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {












      /* BAGEL MENU*/
        
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













      /* BREAKFAST MENU */

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













    /* MAIN MENU */

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

            <h2 style={{ fontSize: "2.0em" }}>Hot Panini</h2>
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
                      <div className="sandwich-name">60. The Vegetarian</div>
                      <div className="sandwich-description">Two Scrambled Eggs, Peppers, Tomato, Chopped Scallions
                      Fresh Mushroom and Mozzarella Cheese on Plain Panini Bread
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">62. Grill Man Special</div>
                      <div className="sandwich-description">Grilled Chicken, Jack Cheese, Lettuce, Tomato, Honey Mustard
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">64. Classico</div>
                      <div className="sandwich-description">Our Delicious Tuna Fish with Provolone Cheese, Romaine Lettuce, Red Onions and Tomatoes
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">66. Taxi Driver</div>
                      <div className="sandwich-description">Turkey Breast and American Cheese with Crisp Bacon and Honey Mustard
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>


                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">61. The American</div>
                      <div className="sandwich-description">Two Scrambled Eggs with Ham, American Cheese, and Tomato on Panini Bread</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">63. The Monte Cristo</div>
                      <div className="sandwich-description">Ham & Honey Turkey, Melted Swiss Cheese, Lettuce, Tomato, Honey Mustard
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">65. American Me</div>
                      <div className="sandwich-description">Deluxe Ham thinly sliced with American Cheese, Lettuce, Tomatoes, Mustard, and Mayonnaise
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                 

                </div>
              </div>
            </ul>


            <h2 style={{ fontSize: "2.0em" }}>Triple Deck Sandwiches</h2>
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
                        <div className="sandwich-name">67. Turkey Breast</div>
                        <div className="sandwich-description">with Bacon, Lettuce, Tomato</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header"></div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">w/ French Fries</div>
                          <span className="bagel-price">$12.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">69. Roast Beef</div>
                        <div className="sandwich-description">with Swiss Cheese, Lettuce, Tomato</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header"></div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">w/ French Fries</div>
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
                      <div className="sandwich-name">68. Chicken Salad</div>
                      <div className="sandwich-description">with Bacon, Lettuce, Tomato</div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header"></div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">w/ French Fries</div>
                          <span className="bagel-price">$12.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">70. Turkey + Chicken Salad</div>
                        <div className="sandwich-description">with Lettuce, Tomato</div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header"></div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">w/ French Fries</div>
                          <span className="bagel-price">$12.99</span>
                        </div>
                      </div>
                    </li>
                  </div>

                 

                </div>
              </div>
            </ul>


            <h2 style={{ fontSize: "2.0em" }}>Manna Cold Wrap</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
                by Boar's Head brand any sauce or dressing
            </p>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
                Plain, Whole Wheat, Tomato, Spinach
            </p>
            <br />
            <br />
            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">71. Chicken Salad</div>
                      <div className="sandwich-description">with Lettuce, Tomato
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">73. Turkey Breast</div>
                      <div className="sandwich-description">with Cheese, Lettuce, Tomato
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">75. Italian</div>
                      <div className="sandwich-description">Ham, Salami, Pepperoni, Provolone, Cheese, Lettuce, Tomato, Oil / Vinegar
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>


                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">72. Tuna Salad</div>
                      <div className="sandwich-description">with Lettuce, Tomato</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">74. Manna Club</div>
                      <div className="sandwich-description">Ham, Turkey Breast, Swiss, Mayo, Lettuce, Tomato</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">76. Vegetable</div>
                      <div className="sandwich-description">Lettuce, Tomato, Roasted Pepper, Pickles, Any Cheese</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$8.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                 

                </div>
              </div>
            </ul>

            <h2 style={{ fontSize: "2.0em" }}>Manna Hot Wrap</h2>
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
                      <div className="sandwich-name">77. Grilled Chicken Caesar Salad Wrap</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">79. Manna Bagel Healthy Wrap</div>
                      <div className="sandwich-description">
                        2 Scrambled Eggs, Honey Turkey, Swiss Cheese, Green Pepper, Onion, Tomato, Choice Wrap
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">81. Turkey BLT</div>
                      <div className="sandwich-description">
                        Turkey Breast, Bacon, Lettuce, Tomato
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">83. Brooklyn Wrap</div>
                      <div className="sandwich-description">
                        Bacon, Eggs, Cheese, Home Fries
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">85. Chipotle Chicken</div>
                      <div className="sandwich-description">
                        Chicken Cutlet, Pepper Jack Cheese, Avocado, Lettuce, Tomato, Chipotle Mayo
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">87. Hot Pastrami</div>
                      <div className="sandwich-description">
                        Bacon, Cheddar Cheese
                      </div>
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
                      <div className="sandwich-name">78. Manna Bagel Wrap</div>
                      <div className="sandwich-description">
                        Grilled Chicken, Avocado, Swiss Cheese, Lettuce, Tomato
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">80. Western Wrap</div>
                      <div className="sandwich-description">
                        2 Scrambled Eggs, Ham or Turkey, Green Pepper, Onion, Tomato
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">82. Rockaway Pkwy Wrap</div>
                      <div className="sandwich-description">
                        Grilled Chicken Breast, Melted Mozzarella, Roast Pepper, Honey Mustard
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">84. Hot Roast Beef</div>
                      <div className="sandwich-description">
                        Swiss, Onion, Pepper w/ Gravy
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">86. Chicken Cutlet</div>
                      <div className="sandwich-description">
                        Cheese, Lettuce, Tomato
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$10.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">88. Chicken Quesadillas</div>
                      <div className="sandwich-description">
                        Grilled Chicken Breast, Mixed Cheese, Green Pepper, Onion
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$12.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                 

                </div>
              </div>
            </ul>

            <h2 style={{ fontSize: "2.0em" }}>Manna Gyro on Pita</h2>
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
                      <div className="sandwich-name">89. Chicken Breast Gyro (Wrap)</div>
                      <div className="sandwich-description">
                        Chicken Breast, Lettuce, Tomato, Red Onion, Gyro Sauce
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">91. Beef Gyro (Pita)</div>
                      <div className="sandwich-description">
                        Beef Gyro, Lettuce, Tomato, Red Onion, Gyro Sauce
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Pita / Wrap</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Platter</div>
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
                      <div className="sandwich-name">90. Chicken Gyro (Pita)</div>
                      <div className="sandwich-description">
                        Grilled Chicken Breast, Red Onion, Lettuce, Tomato, Gyro Sauce
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Pita</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Platter</div>
                          <span className="bagel-price">$12.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">92. Beef Gyro Philly Cheese</div>
                      <div className="sandwich-description">
                        Beef Gyro, Grilled Onion, Pepper, Melted Cheese
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Wrap / Hero</div>
                          <span className="bagel-price">$12.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                 

                </div>
              </div>
            </ul>


            <h2 style={{ fontSize: "2.0em" }}>Manna Faous Fresh Grilled Chicken Breast</h2>
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
                      <div className="sandwich-name">93. Grilled Fresh Chicken Breast</div>
                      <div className="sandwich-description">
                        Red Onion, Tomato, Gyro Sauce
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Pita</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">95. Grilled Chicken</div>
                      <div className="sandwich-description">
                        Jack Cheese, Lettuce, Tomato, Avocado, Chipotle Mayo, Roasted Pepper
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">97. Grilled French Chicken Breast</div>
                      <div className="sandwich-description">
                        Vegetable Salad
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Platter</div>
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
                      <div className="sandwich-name">94. Grilled Fresh Chicken Breast</div>
                      <div className="sandwich-description">
                        Cheese, Lettuce, Tomato
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">96. Grilled Fresh Chicken Breast</div>
                      <div className="sandwich-description">
                        Beef Gyro, Lettuce, Tomato, Red Onion, Gyro Sauce
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Platter</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                 

                </div>
              </div>
            </ul>

            <h2 style={{ fontSize: "2.0em" }}>Manna Famous Salad Platter Over 5 Vegetables with any Dressing</h2>
            <p style={{color: '#C41E3A', fontStyle: 'italic'}}>
                (Lettuce, Tomato, Cucumber, Red Onion and More)
            </p>
            <br />
            <br />
            <ul>
              <div className="bagel-options">
                <div className="bagel-left">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">98. Grilled Chicken Caesar Salad Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$11.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">100. Turkey Breast Salad Platter</div>
                      <div className="sandwich-description">
                        w/ Pepper Turkey, Honey Turkey, Roast Turkeye (3 Kinds)
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$11.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">102. Tuna Salad Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$11.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">104. Grilled Chicken w/ Greek Salad Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$10.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$12.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">107. Chicken Strip Salad Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">(3 pcs)</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">109. Garden Salad</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$6.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$8.99</span>
                        </div>
                      </div>
                    </li>
                  </div>


                </div>
                <div className="bagel-right">
                <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">99. Beef Gyro Salad Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$11.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">101. Roast Beef Salad Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$11.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">103. Chef Salad Platter</div>
                      <div className="sandwich-description">
                        Ham, Turkey, Roast Beef, Swiss Cheese
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$10.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$12.49</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">105. Egg Salad Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$8.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$10.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">108. Chicken Salad (Chunky) Platter</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$8.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$10.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">110. Greek Salad</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                      </div>
                    </li>
                  </div>

                  
                 

                </div>
              </div>
            </ul>

            <h2 style={{ fontSize: "2.0em" }}>Manna Fries, Combo Platter</h2>
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
                      <div className="sandwich-name">111. F.F. Combo Melted Cheddar Cheese</div>
                      <div className="sandwich-description">with Onion Ring
                      </div>
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
                      <div className="sandwich-name">113. Chicken Nugget Combo</div>
                      <div className="sandwich-description">8 pcs Nugget + Fries
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">115. 6 Pcs Mozzarella Stick + Fries</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>


                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">112. Fried Chicken Combo</div>
                      <div className="sandwich-description">
                        Chicken Steak Fries
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">114. 6 Pcs Buffalo Wing Combo</div>
                      <div className="sandwich-description">Buffalo Wings + Fries
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <span className="bagel-price">$9.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">116. Fried Flounder Filet + French Fries</div>
                      <div className="sandwich-description">with Onion Ring
                      </div>
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

            <h2 style={{ fontSize: "2.0em" }}>Side Order</h2>
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
                      <div className="sandwich-name">French Fries</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$3.49</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$5.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Onion Ring, Sweet Potato, Curly F.F. Waffle</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$3.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$6.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Beef Patty</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$2.49</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Potato Knish</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">(ea)</div>
                          <span className="bagel-price">$1.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Mozzarella Sticks 4 pcs</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$4.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Fresh Cut Fruit</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$4.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  
    


                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">French Fries with Cheese</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$4.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.49</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Onion Ring, Sweet Potato, Curly F.F. Waffle with Cheese</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Small</div>
                          <span className="bagel-price">$6.49</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$8.49</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Beef Patty with Cheese</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$3.49</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Rice Pudding (1/2 lb) Homemade</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$1.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Hash Brown 2 pcs</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$3.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">Chicken Nugget 8 pcs</div>
                      <div className="sandwich-description">
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                 

                </div>
            
                
              </div>
              <br/>
              <br/>
              <div className="bagel-item">
                <li style={{color: '#C41E3A', fontWeight:'bold'}}>Healthy Soup <span className="bagel-price">$4.99</span></li>
                <p style={{ fontSize: '0.7em', textAlign: 'left' }}>All Soups are made Fresh Daily. Ask about our Soups of the Day</p>
              </div>
              <div className="bagel-item">
                <li style={{color: '#C41E3A', fontWeight:'bold'}}>Yogurt Fruit Parfaits <span className="bagel-price">$4.99</span></li>
                <p style={{ fontSize: '0.7em', textAlign: 'left' }}>Fresh Lowfat Dannon Vanilla Yogurt with Fruit & Granola, Great as an Appetizer or Dessert Treat</p>
              </div>

            <h2 style={{ fontSize: "2.0em" }}>Smoothies</h2>
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
                      <div className="sandwich-name">1. Berry Banana</div>
                      <div className="sandwich-description">Strawberry, Blueberry, Banana, Almond Milk
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$5.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">3. Mega Mango</div>
                      <div className="sandwich-description">
                        Mango, Strawberry, Orange, Pineapple
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$5.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">5. Tropical Tornado</div>
                      <div className="sandwich-description">
                        Apple Juice, Mango, Pineapple, Strawberry
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$5.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                      </div>
                    </li>
                  </div>

                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">2. Apple Fruitee</div>
                      <div className="sandwich-description">
                        Apple Juice, Strawberry, Banana, Kiwi
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$5.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">4. High Protein</div>
                      <div className="sandwich-description">
                        Strawberry, Banana, Almond Milk, Protein Powder
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$5.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$7.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
            

                </div>
              </div>

            
              
            </ul>
            <h2 style={{ fontSize: "2.0em" }}>Juice</h2>
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
                      <div className="sandwich-name">1. Daily Detox</div>
                      <div className="sandwich-description">
                        Carrot, Cucumber, Apple, Ginger
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$6.50</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$8.50</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">3. Pure Fresh</div>
                      <div className="sandwich-description">
                        Apple, Orange, Carrot
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$6.50</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$8.50</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">5. The Refresher</div>
                      <div className="sandwich-description">
                        Beet, Celery, Apple, Carrot, Lemon Juice
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$6.50</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$8.50</span>
                        </div>
                      </div>
                    </li>
                  </div>

                </div>
                <div className="bagel-right">
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">2. Green Machine</div>
                      <div className="sandwich-description">
                        Spinach, Kale, Cucumber, Apple, Celery
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$6.50</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$8.50</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">4. Eye Doctor</div>
                      <div className="sandwich-description">
                        Carrot, Apple, Celery, Ginger
                      </div>
                    </div>
                    <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Medium</div>
                          <span className="bagel-price">$6.50</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Large</div>
                          <span className="bagel-price">$8.50</span>
                        </div>
                      </div>
                    </li>
                  </div>
        
                </div>
              </div>  
            </ul>
          </ul>
        </div>;














      /* CHEF SPECIAL MENU */

      case 'Chef Special':
        return <div className="menu-section">
            <h2 style={{ fontSize: "2.0em" }}>Manna Chef Special</h2>
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
                      <div className="sandwich-name">S1. Manna Grilled Chicken Caesar Salad</div>
                      <div className="sandwich-description"></div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <div className="price-header">Small</div>
                        <span className="bagel-price">$9.99</span>
                      </div>
                      <div className="price-group">
                        <div className="price-header">Large</div>
                        <span className="bagel-price">$11.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                    <div className="sandwich-item">
                      <div className="sandwich-name">S3. Con Edison Emergency</div>
                      <div className="sandwich-description">Grilled Chicken, Bacon, Cheddar Cheese, Roasted Peppers, and Balsamic Vinegar</div>
                    </div>
                    <div className="price-container">
                      <div className="price-group">
                        <div className="price-header">Roll</div>
                        <span className="bagel-price">$9.99</span>
                      </div>
                      <div className="price-group">
                        <div className="price-header">Hero</div>
                        <span className="bagel-price">$13.99</span>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">S5. Jersey Shore</div>
                        <div className="sandwich-description">
                            Fresh Homemade Crispy Chicken Cutlet, Melted Mozzarella, Bacon, Spicy French Fries, Ranch Dressing
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">S7. Throwback</div>
                        <div className="sandwich-description">
                            Fresh Homemade Crispy Chicken Cutlet, Bacon, Onion Rings, Cheddar Cheese, B.B.Q. Sauce on a Toasted Garlic Hero
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">S9. Double Trouble</div>
                        <div className="sandwich-description">
                            Two Burgers, Bacon, Onion Rings, American Cheese, Pickles, Ketchup, Salt and Pepper on a Toasted Hero
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Hero</div>
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
                        <div className="sandwich-name">S2. Time Warner</div>
                        <div className="sandwich-description">
                            Chicken Cutlet and Honey Turkey with Muenster Cheese and French Fries, Honey Mustard
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">S4. American Idol</div>
                        <div className="sandwich-description">
                            Crispy Chicken Cutlet, American Cheese, French Fries and Onion Rings, Russian Dressing, B.B.Q. Sauce, Toast Garlic Hero
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">S6. Top Chef</div>
                        <div className="sandwich-description">
                            Fresh Homemade Crispy Chicken Cutlet, Melted Mozzarella, Bacon, French Fries, Brown Gravy or B.B.Q. Sauce
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">S8. Little Italy</div>
                        <div className="sandwich-description">
                            Grilled Chicken, Fresh Oregano, Mozzarella Cheese, Roasted Peppers, Fried Salami on a Toasted Garlic Hero
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="bagel-item">
                    <li>
                      <div className="sandwich-item">
                        <div className="sandwich-name">S10. Roasted Beef Delight</div>
                        <div className="sandwich-description">
                            Grilled Roasted Beef, Mozzarella Cheese, Bacon, Spicy French Fries, Hot Sauce + Brown Gravy
                        </div>
                      </div>
                      <div className="price-container">
                        <div className="price-group">
                          <div className="price-header">Roll</div>
                          <span className="bagel-price">$9.99</span>
                        </div>
                        <div className="price-group">
                          <div className="price-header">Hero</div>
                          <span className="bagel-price">$13.99</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  

                </div>
              </div>
            </ul>



        </div>;
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
            <div className="quadrant" onClick={() => setSelectedSection('Chef Special')}>MANNA CHEF SPECIAL</div>
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
