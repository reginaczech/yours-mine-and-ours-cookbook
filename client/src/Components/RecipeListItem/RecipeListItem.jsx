import React from "react";
import { useNavigate, Link } from "react-router-dom";


const RecipeListItem = ({ recipe }) => {

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col border-2 h-64 w-56 rounded-2xl border-theme-light-grey content-center hover:border-4 hover:border-theme-dark-yellow hover:text-theme-dark-yellow">
        <img
          className="h-56 overflow-hidden object-cover rounded-t-xl cursor-pointer "
          onClick={() => navigate(`/recipes/${recipe.id}`)}
          src={recipe.image}
        />
        <Link
          className="p-2 font-['Georgia'] text-md font-medium text-center"
          to={`/recipes/${recipe.id}`}
        >
          {recipe.recipeName}
        </Link>
      </div>
    </>
  );
};

export default RecipeListItem;
