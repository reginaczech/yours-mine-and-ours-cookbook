import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

const RecipesList = ({ recipesList, setRecipesList }) => {

  return (
    <>
      <div className="recipe-list-container">
        {recipesList &&
          recipesList.map((recipe) => (
            <div key={recipe.id}>
              <RecipeListItem recipe={recipe} setRecipesList={setRecipesList} />
            </div>
          ))}
      </div>
    </>
  );
};

export default RecipesList;
