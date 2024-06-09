import React from "react";

const RecipeListItem = ({ recipe }) => {
  return (
    <>
      <div className="recipe-list-item-container">
        <p>{recipe.recipeName}</p>
      </div>
    </>
  );
};

export default RecipeListItem;
