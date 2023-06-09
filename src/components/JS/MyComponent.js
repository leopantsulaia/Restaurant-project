import React, {useState} from "react";
import Creation from "./Creation.jsx";
import Tables from "./Tables";
import TableOne from "../JS/Tables/TableOne.jsx"; // Import the TableOne component
import "./main.scss";

function MyComponent(props) {
  const [showCreation, setShowCreation] = useState(false);
  const [showTables, setShowTables] = useState(false);
  const [showTable, setShowTable] = useState(null); // Add a new state variable to keep track of which table component should be displayed

  return (
    <>
      {!showCreation && !showTables && !showTable && (
        <>
          <aside className='mid-leftSide'>
            <button onClick={() => setShowCreation(true)} className='create-table-btn'>
              Create Table
            </button>
          </aside>
          <aside className='mid-rightSide'>
            <button
              onClick={() => setShowTable("TableOne")} // Update the onClick prop of the first button to set showTable to "TableOne" when clicked
              className='create-table-btn'>
              Tables Now
            </button>
            <button onClick={() => setShowTables(true)} className='create-table-btn'>
              Tables Now
            </button>
            <button onClick={() => setShowTables(true)} className='create-table-btn'>
              Tables Now
            </button>
            <button onClick={() => setShowTables(true)} className='create-table-btn'>
              Tables Now
            </button>
          </aside>
        </>
      )}
      {showCreation && <Creation />}
      {showTables && <Tables />}
      {showTable === "TableOne" && <TableOne />} {/* Render the TableOne component if showTable is "TableOne" */}
    </>
  );
}

export default MyComponent;
