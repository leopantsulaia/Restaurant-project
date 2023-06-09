import React, {useContext} from "react";
import TableQuestions from "./TablesQuestion";
import dataFood from "../../Data/MenuDrink.json";
import dataDrink from "../../Data/MenuFood.json";
import {SaveTappedContext} from "../Logic/SaveTapped"; // Import the SaveTappedContext

const TableOne = () => {
  const {setSaveTapped} = useContext(SaveTappedContext);

  const handleSave = (selectedFood, selectedDrink) => {
    setSaveTapped({selectedFood, selectedDrink});
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
