// TableSave.jsx
import React, { useContext } from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuDrink.json";
import dataDrink from "../../Data/MenuFood.json";
import { SaveTappedContext } from "../Logic/SaveTapped";

const TableSave = ({ id, title, tableNumber }) => {
  const { saveTapped, setSaveTapped } = useContext(SaveTappedContext);

  const handleSave = (selectedFood, selectedDrink) => {
    setSaveTapped((prevSaveTapped) => ({
      ...prevSaveTapped,
      [tableNumber]: { selectedFood, selectedDrink },
    }));
    console.log(`Table ${tableNumber}: Selected food:`, selectedFood);
    console.log(`Table ${tableNumber}: Selected drink:`, selectedDrink);
  };

  return (
    <div id={id}>
      <TableQuestions
        dataFood={dataFood}
        dataDrink={dataDrink}
        title={title}
        onSave={handleSave}
        selectedFood={saveTapped[tableNumber]?.selectedFood}
        selectedDrink={saveTapped[tableNumber]?.selectedDrink}
      />
    </div>
  );
};

export default TableSave;
