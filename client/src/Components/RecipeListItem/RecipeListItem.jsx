import React from "react";
import { Link } from "react-router-dom";


const RecipeListItem = ({ recipe }) => {
  return (
    <>
      <div className="recipe-list-item-container">
        <img
          className="recipeImg"
          src={recipe.image}
          style={{ width: "200px" }}
        />
        <Link to={`/recipes/${recipe.id}`}>{recipe.recipeName}</Link>
      </div>
    </>
  );
};

export default RecipeListItem;
