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
  },[]);

  return (
    <div className="recipe-details-container">
      <h1>{recipeDetails.recipeName}</h1>
    </div>
  );
};

export default RecipeDetails;
