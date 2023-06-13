import React from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuDrink.json";
import dataDrink from "../../Data/MenuFood.json";
import UseLocalStorage from "../Logic/UseLocalStorage";

const TableSave = ({id, title, tableNumber}) => {
  const [saveTapped, setSaveTapped] = UseLocalStorage("saveTapped", {});

  const handleSave = (selectedFood, selectedDrink) => {
    setSaveTapped((prevSaveTapped) => ({
      ...prevSaveTapped,
      [tableNumber]: {selectedFood, selectedDrink},
    }));
  };

  return (
    <div id={id}>
      <TableQuestions dataFood={dataFood} dataDrink={dataDrink} title={title} onSave={handleSave} selectedFood={saveTapped[tableNumber]?.selectedFood} selectedDrink={saveTapped[tableNumber]?.selectedDrink} />
    </div>
  );
};

export default TableSave;
