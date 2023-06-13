import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Questions.scss";

const TableQuestions = ({dataFood, dataDrink, title, onSave}) => {
  const [selectedItems, setSelectedItems] = useState({food: {}, drink: {}});
  const [showFood, setShowFood] = useState(true);
  const navigate = useNavigate();

  const handleCheckboxChange = (event, type) => {
    const {name} = event.target;
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [type]: {
        ...prevSelectedItems[type],
        [name]: prevSelectedItems[type][name] ? 0 : 1,
      },
    }));
  };

  const handleQuantityChange = (event, type) => {
    const {name, value} = event.target;
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [type]: {
        ...prevSelectedItems[type],
        [name]: Number(value),
      },
    }));
  };

  const showDrinkSelection = () => {
    setShowFood(false);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(selectedItems.food, selectedItems.drink);
    }
    navigate("/Tables");
  };

  return (
    <div className='table-questions'>
      <h1>{title}</h1>
      {showFood ? (
        <>
          <h2>Food</h2>
          <ul>
            {Object.values(dataDrink)
              .flat()
              .map((item) => (
                <li key={item.title}>
                  <label>
                    <input type='checkbox' name={item.title} onChange={(e) => handleCheckboxChange(e, "drink")} checked={selectedItems.drink[item.title] > 0} />
                    {item.title}
                    {selectedItems.drink[item.title] > 0 && <input type='number' name={item.title} onChange={(e) => handleQuantityChange(e, "drink")} value={selectedItems.drink[item.title] || 0} />}
                  </label>
                </li>
              ))}
          </ul>
          <button onClick={showDrinkSelection}>Next</button>
        </>
      ) : (
        <>
          <h2>Drinks</h2>
          <ul>
            {Object.values(dataFood)
              .flat()
              .map((item) => (
                <li key={item.title}>
                  <label>
                    <input type='checkbox' name={item.title} onChange={(e) => handleCheckboxChange(e, "food")} checked={selectedItems.food[item.title] > 0} />
                    {item.title}
                    {selectedItems.food[item.title] > 0 && <input type='number' name={item.title} onChange={(e) => handleQuantityChange(e, "food")} value={selectedItems.food[item.title] || 0} />}
                  </label>
                </li>
              ))}
          </ul>
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default TableQuestions;
