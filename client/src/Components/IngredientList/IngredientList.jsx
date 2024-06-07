import React from "react";

const IngredientList = ({ ingredientList, setIngredientList }) => {

  const handleAdd = () => {
    setIngredientList([
      ...ingredientList,
      { ingName: "", ingAmount: 0, ingUnit: "" },
    ]);
  };

  const handleRemove = (index) => {
    const list = [...ingredientList];
    console.log(list);
    list.splice(index, 1);
    setIngredientList(list);
  };

  const handleIngChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...ingredientList];
    console.log(list);
    list[index][name] = value;
    setIngredientList(list);
  };

  console.log(ingredientList);

  return (
    <>
      <div className="dynamic-ingredient-container">
        <p>Ingredients:</p>
        <label htmlFor="ingName">Name:</label>
        <label htmlFor="ingAmount">Amount:</label>
        <label htmlFor="ingUnit">Unit:</label>
        <ol>
          {ingredientList.map((ingredient, index) => (
            <li key={index} className="ingredient">
              <div className="inputIngredients">
                <input
                  type="text"
                  name="ingName"
                  id="ingName"
                  value={ingredient.ingName}
                  onChange={(event) => handleIngChange(event, index)}
                  required
                />
                <input
                  type="text"
                  name="ingAmount"
                  id="ingAmount"
                  value={ingredient.ingAmount}
                  onChange={(event) => handleIngChange(event, index)}
                  required
                />
                <input
                  type="text"
                  name="ingUnit"
                  id="ingUnit"
                  value={ingredient.ingUnit}
                  onChange={(event) => handleIngChange(event, index)}
                  required
                />
                {ingredientList.length - 1 === index && (
                  <button
                    type="button"
                    className="addIngredientBtn"
                    onClick={handleAdd}
                  >
                    +
                  </button>
                )}
              </div>
              <div className="removeIngredient">
                {ingredientList.length > 1 && (
                  <button
                    type="button"
                    className="removeIngBtn"
                    onClick={() => handleRemove(index)}
                  >
                    🗑️
                  </button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default IngredientList;
