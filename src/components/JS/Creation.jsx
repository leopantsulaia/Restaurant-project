import React, { useState } from "react";
import CHEMIDATA from "../Data/MenuDrink.json";

const Creation = () => {
  const [showMenuOne, setShowMenuOne] = useState(false);
  const [showMenuTwo, setShowMenuTwo] = useState(false);
  const [showMenuThree, setShowMenuThree] = useState(false);
  const [showMenuFour, setShowMenuFour] = useState(false);

  const openMenu = (menu) => {
    console.log(CHEMIDATA[menu]);
  };

  return (
    <div className='Creation' id='CreationId'>
      <div className='crt-header'>
        <span>
          <h1>CHOOSE THE TABLE</h1>
        </span>
      </div>
      <nav className='nav-tables'>
        <div id='table-one' className='div-tables'>
          {!showMenuOne && (
            <button id='btn-one' onClick={() => setShowMenuOne(true)}>
              1
            </button>
          )}
          {showMenuOne && (
            <ul>
              {CHEMIDATA.tableOne.map((menu) => (
                <li key={menu} onClick={() => openMenu(menu)}>
                  {menu}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div id='table-two' className='div-tables'>
          {!showMenuTwo && (
            <button id='btn-two' onClick={() => setShowMenuTwo(true)}>
              2
            </button>
          )}
          {showMenuTwo && (
            <ul>
              {CHEMIDATA.tableTwo.map((menu) => (
                <li key={menu} onClick={() => openMenu(menu)}>
                  {menu}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div id='table-three' className='div-tables'>
          {!showMenuThree && (
            <button id='btn-three' onClick={() => setShowMenuThree(true)}>
              3
            </button>
          )}
          {showMenuThree && (
            <ul>
              {CHEMIDATA.tableThree.map((menu) => (
                <li key={menu} onClick={() => openMenu(menu)}>
                  {menu}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div id='table-four' className='div-tables'>
          {!showMenuFour && (
            <button id='btn-four' onClick={() => setShowMenuFour(true)}>
              4
            </button>
          )}
          {showMenuFour && (
            <ul>
              {CHEMIDATA.tableFour.map((menu) => (
                <li key={menu} onClick={() => openMenu(menu)}>
                  {menu}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Creation;
