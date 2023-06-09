import React, {useState} from "react";

const TableQuestions = ({dataFood, dataDrink, title, onSave}) => {
  const [selectedFood, setSelectedFood] = useState({});
  const [selectedDrink, setSelectedDrink] = useState({});

  const handleFoodCheckboxChange = (event) => {
    const {name} = event.target;
    setSelectedFood((prevSelectedFood) => ({
      ...prevSelectedFood,
      [name]: prevSelectedFood[name] ? 0 : 1,
    }));
  };

  const handleFoodQuantityChange = (event) => {
    const {name, value} = event.target;
    setSelectedFood((prevSelectedFood) => ({
      ...prevSelectedFood,
      [name]: Number(value),
    }));
  };

  const handleDrinkCheckboxChange = (event) => {
    const {name} = event.target;
    setSelectedDrink((prevSelectedDrink) => ({
      ...prevSelectedDrink,
      [name]: prevSelectedDrink[name] ? 0 : 1,
    }));
  };

  const handleDrinkQuantityChange = (event) => {
    const {name, value} = event.target;
    setSelectedDrink((prevSelectedDrink) => ({
      ...prevSelectedDrink,
      [name]: Number(value),
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(selectedFood, selectedDrink);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>Food</h2>
      <ul>
        {Object.values(dataDrink)
          .flat()
          .map((item) => (
            <li key={item.title}>
              <label>
                <input type='checkbox' name={item.title} onChange={handleDrinkCheckboxChange} checked={selectedDrink[item.title] > 0} />
                {item.title}
                {selectedDrink[item.title] > 0 && <input type='number' name={item.title} onChange={handleDrinkQuantityChange} value={selectedDrink[item.title] || 0} />}
              </label>
            </li>
          ))}
      </ul>
      <h2>Drinks</h2>
      <ul>
        {Object.values(dataFood)
          .flat()
          .map((item) => (
            <li key={item.title}>
              <label>
                <input type='checkbox' name={item.title} onChange={handleFoodCheckboxChange} checked={selectedFood[item.title] > 0} />
                {item.title}
                {selectedFood[item.title] > 0 && <input type='number' name={item.title} onChange={handleFoodQuantityChange} value={selectedFood[item.title] || 0} />}
              </label>
            </li>
          ))}
      </ul>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TableQuestions;
