import React from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuDrink.json";
import dataDrink from "../../Data/MenuFood.json";

const TableFour = () => {
  const handleSave = (selectedFood, selectedDrink) => {
    console.log("TableFour: Selected food:", selectedFood);
    console.log("TableFour: Selected drink:", selectedDrink);
  };
  return (
    <>
      <TableQuestions dataFood={dataFood} dataDrink={dataDrink} title='Table Four' onSave={handleSave} />
    </>
  );
};

export default TableFour;
