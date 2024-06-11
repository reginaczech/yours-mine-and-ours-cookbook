"use strict";

import React, { useState } from "react";
import { postWebScrapingURL } from "../../APIServices/fetchServices";

const ImportRecipe = ({
  formData,
  setFormData,
  instructionList,
  setInstructionList,
  ingredientList,
  setIngredientList,
}) => {
  const [recipeURL, setRecipeURL] = useState({
    url: "https://www.allrecipes.com/chocolate-peanut-butter-protein-bars-recipe-8421618",
  });

    const handleRecipeURLChange = (event) => {
      const { value } = event.target;
      setRecipeURL(() => ({ url: value }));
    };

  const handleImportClick = () => {
    //post url -> to backend and webscrape
    postWebScrapingURL(recipeURL).then((data) => {
      // TODO: setRecipeURL({ url: "" });
      console.log('recipe web scraping incoming data', data)
      setFormData({
        ...formData,
        recipeName: data.recipeName,
        image: data.image,
      });
      setInstructionList(() =>
        data.instructionList.map((item) => ({
          ...item,
          instructItem: item.instructItem,
        }))
      );
      setIngredientList(() =>
        data.ingredientList.map((item) => ({
          ...item,
          ingName: item.ingName,
          ingAmount: item.ingAmount,
          ingUnit: item.ingUnit,
        }))
      );
    });
  };

  return (
    <>
      <div className="flex flex-col items-center text-center gap-y-6 border-b border-gray-900/20 w-1/2">
        <label
          htmlFor="recipeURL"
          className="mt-10 block text-lg font-medium leading-6 text-theme-dark-grey"
        >
          Import a recipe from a website:
        </label>
        <input
          type="text"
          name="recipeURL"
          id="recipeURL"
          value={recipeURL.url}
          className="w-4/5 block rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
          onChange={handleRecipeURLChange}
        />
        <button
          className="mb-10 rounded-md bg-theme-dark-yellow px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-light-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-light-grey"
          onClick={handleImportClick}
        >
          Import Recipe!
        </button>
      </div>
    </>
  );
};

export default ImportRecipe;
