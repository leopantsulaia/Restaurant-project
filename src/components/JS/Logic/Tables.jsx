import React from "react";
import UseLocalStorage from "./UseLocalStorage";
import {useNavigate} from "react-router-dom";
import "./style.scss";

const Tables = () => {
  const [saveTapped] = UseLocalStorage("saveTapped", {});
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Home");
  };

  return (
    <>
      <button className='back-btn' onClick={handleBack}>
        Back
      </button>
      {Object.entries(saveTapped).map(([tableNumber, {selectedFood, selectedDrink}]) => (
        <div key={tableNumber}>
          <h2>Table {tableNumber}</h2>
          {selectedFood && (
            <>
              <h3>Drink</h3>
              <ul>
                {Object.entries(selectedFood)
                  .filter(([_, quantity]) => quantity > 0)
                  .map(([title, quantity]) => (
                    <li key={title}>
                      {title}: {quantity}
                    </li>
                  ))}
              </ul>
            </>
          )}
          {selectedDrink && (
            <>
              <h3>Food</h3>
              <ul>
                {Object.entries(selectedDrink)
                  .filter(([_, quantity]) => quantity > 0)
                  .map(([title, quantity]) => (
                    <li key={title}>
                      {title}: {quantity}
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Tables;
