import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../APIServices/fetchServices";

const RecipeDetails = () => {
  const [recipeDetails, setRecipesDetails] = useState({});

  const params = useParams();
  console.log(params);

  //fetch: get recipe by id
  useEffect(() => {
    getRecipeById(params.recipeId).then((data) => setRecipesDetails(data));
  }, []);

  const { recipeName, image, instructions, ingredients, servingSize } = recipeDetails;

  return (
    <div className="recipe-details-container">
      <h1>{recipeName}</h1>
      <img src={image} alt="recipe image" style={{ width: "200px" }} />
      <ol className="instructions-container">
        <h2>Instructions</h2>
        {instructions && instructions.map((el, i) => <li key={i}>{el}</li>)}
      </ol>
      <div className="ingredients-container">
        <h2>Ingredients</h2>
        <h3>Servings</h3>
        <p>{servingSize}</p>
        {ingredients &&
          ingredients.map((el) => (
            <div key={el.id}>
              <span className="ingredient-name">{el.ingName}</span>
              <span className="ingredient-amount">{el.ingAmount}</span>
              <span className="ingredient-unit">{el.ingUnitId}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
