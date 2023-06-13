import React, {useState} from "react";
import TableSave from "./Tables/TableSave.jsx";

import "./main.scss";

const TableSelection = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <aside className='mid-rightSide'>
      {!selectedTable && (
        <>
          <button onClick={() => setSelectedTable(1)} className='create-table-btn'>
            Table 1
          </button>
          <button onClick={() => setSelectedTable(2)} className='create-table-btn'>
            Table 2
          </button>
          <button onClick={() => setSelectedTable(3)} className='create-table-btn'>
            Table 3
          </button>
          <button onClick={() => setSelectedTable(4)} className='create-table-btn'>
            Table 4
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

export default TableSelection;