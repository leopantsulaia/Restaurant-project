// MyComponent.js
import React, { useState } from 'react';
import Creation from "./Creation.jsx";
import Tables from "./Tables";

function MyComponent(props) {
  const [showCreation, setShowCreation] = useState(false);
  const [showTables, setShowTables] = useState(false);

  return (
    <>
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
      {showCreation && <Creation />}
      {showTables && <Tables />}
    </>
  );
}

export default MyComponent;
