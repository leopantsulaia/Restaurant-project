import React, { useState } from "react";
import "./app.scss";
import Creation from "./components/JS/Creation.jsx";
import Tables from "./components/JS/Tables";

function App() {
  const [showCreation, setShowCreation] = useState(false);
  const [showTables, setShowTables] = useState(false);

  return (
    <div className='App'>
      <header className='header'>
        <ul className='header-items'>
          <li>
            <a href='./'> Home </a>
          </li>
          <li>
            <a href='./magidebi'>Magidebi</a>{" "}
          </li>
          <li>
            <a href='./about'>about</a>
          </li>
        </ul>
      </header>
      <div className='mid-div'>
        {!showCreation && !showTables && (
          <>
            <aside
              className='mid-leftSide'
              onClick={() => setShowCreation(true)}
            >
              Create Table
            </aside>
            <aside
              className='mid-rightSide'
              onClick={() => setShowTables(true)}
            >
              Tables Now
            </aside>
          </>
        )}
        {showCreation &&  <Creation />}
        {showTables && <Tables />}
      </div>
    </div>
  );
}

export default App;
