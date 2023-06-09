import React, { useState } from "react";
import Creation from "./Creation.jsx";
import Tables from "./Tables";
import './main.scss'

function MyComponent(props) {
  const [showCreation, setShowCreation] = useState(false);
  const [showTables, setShowTables] = useState(false);

  return (
    <>
      {!showCreation && !showTables && (
        <>
          <aside className='mid-leftSide'>
            <button
              onClick={() => setShowCreation(true)}
              className='create-table-btn'
            >
              Create Table
            </button>
          </aside>
          <aside className='mid-rightSide'>
            <button
              onClick={() => setShowTables(true)}
              className='create-table-btn'
            >
              Tables Now
            </button>
            <button
              onClick={() => setShowTables(true)}
              className='create-table-btn'
            >
              Tables Now
            </button>
            <button
              onClick={() => setShowTables(true)}
              className='create-table-btn'
            >
              Tables Now
            </button>
            <button
              onClick={() => setShowTables(true)}
              className='create-table-btn'
            >
              Tables Now
            </button>
          </aside>
        </>
      )}
      {showCreation && <Creation />}
      {showTables && <Tables />}
    </>
  );
}

export default MyComponent;
