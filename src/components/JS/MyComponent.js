import React, {useState} from "react";
import TableSave from "../JS/Tables/TableSave.jsx";

const MyComponent = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <aside className='mid-rightSide'>
      {!selectedTable && (
        <>
          <button onClick={() => setSelectedTable(1)} className='create-table-btn'>
            Table One
          </button>
          <button onClick={() => setSelectedTable(2)} className='create-table-btn'>
            Table Two
          </button>
          <button onClick={() => setSelectedTable(3)} className='create-table-btn'>
            Table Three
          </button>
          <button onClick={() => setSelectedTable(4)} className='create-table-btn'>
            Table Four
          </button>
        </>
      )}
      {selectedTable === 1 && <TableSave id='table-one' title='Table One' tableNumber={1} />}
      {selectedTable === 2 && <TableSave id='table-two' title='Table Two' tableNumber={2} />}
      {selectedTable === 3 && <TableSave id='table-three' title='Table Three' tableNumber={3} />}
      {selectedTable === 4 && <TableSave id='table-four' title='Table Four' tableNumber={4} />}
    </aside>
  );
};

export default MyComponent;
