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

  const handleImportClick = () => {
    //post url -> to backend and webscrape
    postWebScrapingURL(recipeURL).then((data) => {
      console.log("🚀 ~ handleImportClick ~ data:", data);
      console.log(data.instructionList);
      // TODO: setRecipeURL({ url: "" });
      setFormData({
        ...formData,
        recipeName: data.recipeName,
        recipeImage: data.recipeImage,
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
          onChange={(e) => setRecipeURL(e.target.value)}
        />
        <button className="import-recipe-btn" onClick={handleImportClick}>
          Import Recipe!
        </button>
      </div>
    </>
  );
};

export default ImportRecipe;
