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

  console.log(recipeDetails);
  const { recipeName, image, instructions, ingredients, servingSize } =
    recipeDetails;

  return (
    <div className="grid grid-cols-12 grid-rows-10 bg-theme-background-white">
      <div className="col-start-2 col-span-10 row-start-2 row-span-4 h-3/4 w-full overflow-hidden justify-self-center rounded-lg">
        <img src={image} alt="recipe image" />
      </div>

      <h1 className=" font-['Georgia'] ml-10 py-5 text-5xl font-bold text-pretty align-middle z-20 col-start-1 col-span-6 row-start-3 bg-theme-background-white rounded-lg">
        {recipeName}
      </h1>
      <div className="col-start-2 col-span-6 row-start-6 row-span-6 py-3 px-3">
        <h2 className="font-['Georgia'] text-2xl mb-8 list-decimal font-bold ">
          Instructions
        </h2>
        <ol className="">
          {instructions &&
            instructions.map((el, i) => (
              <li key={i} className="pl-4 text-lg mb-4 flex">
                <span className="font-['Georgia'] mr-4 rounded-full  text-center text-theme-dark-yellow ">
                  {i + 1}
                </span>
                <span>{el}</span>
              </li>
            ))}
        </ol>
      </div>
      <div className="col-start-9 col-span-3 row-start-6 row-span-4 py-8 px-8 bg-theme-offwhite rounded-xl">
        <h2 className="font-['Georgia'] text-2xl mb-8 text-md font-bold">
          Ingredients
        </h2>
        <div className="font-['Georgia'] flex pb-4 border-b-2">
          <h3 className="text-xl">Servings</h3>
          <p>{servingSize}</p>
        </div>
        <div className="flex flex-col gap-y-3 mt-4">
          {ingredients &&
            ingredients.map((el) => (
              <div key={el.id} className="grid grid-cols-4 grid-rows-1 gap-x-1">
                <span className=" font-bold col-start-1 col-span-2">{el.ingName}</span>
                <span className="col-start-3">{el.ingAmount}</span>
                <span className="col-start-4">{el.ingUnitId}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
