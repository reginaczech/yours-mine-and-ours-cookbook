import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

const RecipesList = ({
  recipesList,
  setRecipesList,
}) => {
  return (
    <>
      <div className="flex gap-x-10 m-10 snap-x snap-mandatory overflow-x-scroll overflow-hidden  no-scrollbar">
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
