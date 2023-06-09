import React from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuDrink.json";
import dataDrink from "../../Data/MenuFood.json";

const TableThree = () => {
  const handleSave = (selectedFood, selectedDrink) => {
    console.log("TableThree: Selected food:", selectedFood);
    console.log("TableThree: Selected drink:", selectedDrink);
  };
  return (
    <>
      <TableQuestions dataFood={dataFood} dataDrink={dataDrink} title='Table Three' onSave={handleSave} />
    </>
  );
};

export default TableThree;
