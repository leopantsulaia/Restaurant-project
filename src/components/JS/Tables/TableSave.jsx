import React from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuFood.json";
import dataDrink from "../../Data/MenuDrink.json";
import useLocalStorage from "../../UseLocalStorage"; // <-- Corrected import

const TableSave = ({ id, title, tableNumber }) => {
  const [saveTapped, setSaveTapped] = useLocalStorage("saveTapped", {});

  const handleSave = (selectedFood, selectedDrink) => {
    setSaveTapped((prevSaveTapped) => ({
      ...prevSaveTapped,
      [tableNumber]: { selectedFood, selectedDrink },
    }));
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
