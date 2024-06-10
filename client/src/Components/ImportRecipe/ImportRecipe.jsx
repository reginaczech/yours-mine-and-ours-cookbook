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
      <div>
        <label htmlFor="recipeURL">Import a recipe from a website</label>
        <input
          type="text"
          name="recipeURL"
          id="recipeURL"
          value={recipeURL.url}
          onChange={handleRecipeURLChange}
        />
        <button className="import-recipe-btn" onClick={handleImportClick}>
          Import Recipe!
        </button>
      </div>
    </>
  );
};

export default ImportRecipe;
