import React, { useState } from "react";
import TableSave from "./Tables/TableSave.jsx";

import "./main.scss";

const TableSelection = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <aside
      className={selectedTable ? "mid-rightSide" : "home-center"}
      style={
        !selectedTable
          ? {
              minHeight: "100vh",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              animation: "fadeIn 1.2s cubic-bezier(.4,2,.6,1)",
            }
          : undefined
      }>
      {!selectedTable && (
        <>
          <h1
            style={{
              color: "#ffeaa7",
              fontSize: "3.2rem",
              marginBottom: "2.5rem",
              letterSpacing: "2.5px",
              fontWeight: 900,
              textShadow: "0 4px 24px #8e24aa, 0 1px 0 #fff",
            }}>
            The Bestaurant!
          </h1>
          <div className="tables-grid">
            <button
              onClick={() => setSelectedTable(1)}
              className="create-table-btn">
              <span>Table 1</span>
            </button>
            <button
              onClick={() => setSelectedTable(2)}
              className="create-table-btn">
              <span>Table 2</span>
            </button>
            <button
              onClick={() => setSelectedTable(3)}
              className="create-table-btn">
              <span>Table 3</span>
            </button>
            <button
              onClick={() => setSelectedTable(4)}
              className="create-table-btn">
              <span>Table 4</span>
            </button>
          </div>
        </>
      )}
      {selectedTable === 1 && (
        <TableSave id="table-one" title="Table One" tableNumber={1} />
      )}
      {selectedTable === 2 && (
        <TableSave id="table-two" title="Table Two" tableNumber={2} />
      )}
      {selectedTable === 3 && (
        <TableSave id="table-three" title="Table Three" tableNumber={3} />
      )}
      {selectedTable === 4 && (
        <TableSave id="table-four" title="Table Four" tableNumber={4} />
      )}
    </aside>
  );
};

export default TableSelection;
