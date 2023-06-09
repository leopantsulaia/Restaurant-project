import React from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuDrink.json";
import dataDrink from "../../Data/MenuFood.json";

const TableTwo = () => {
  const handleSave = (selectedFood, selectedDrink) => {
    console.log("TableTwo: Selected food:", selectedFood);
    console.log("TableTwo: Selected drink:", selectedDrink);
  };
  return (
    <>
      <TableQuestions dataFood={dataFood} dataDrink={dataDrink} title='Table Two' onSave={handleSave} />
    </>
  );
};

export default TableTwo;
