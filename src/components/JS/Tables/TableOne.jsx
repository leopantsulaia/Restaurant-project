import React from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuDrink.json";
import dataDrink from "../../Data/MenuFood.json";

const TableOne = () => {
  const handleSave = (selectedFood, selectedDrink) => {
    console.log("TableOne: Selected food:", selectedFood);
    console.log("TableOne: Selected drink:", selectedDrink);
  };

  return (
    <>
      <TableQuestions dataFood={dataFood} dataDrink={dataDrink} title='Table One' onSave={handleSave} />
    </>
  );
};

export default TableOne;
