import React, { useState } from "react";
import "./AddRecipeForm.css"
import InputCategoryTags from "../InputCategoryTags/InputCategoryTags";
import InstructionList from "../InstructionList/InstructionList";

const AddRecipeForm = () => {
  const [tags, setTags] = useState([]); //prop drill this from the new recipe form

  const [formData, setFormData] = useState({
    recipeName: "",
    recipeImage: "",
    duration: "",
    serving: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({ ...formData, [name]: value }));
    console.log(formData)
  };

  //on submitFormChange -> add the tag data to the submission

  const { recipeName, recipeImage, duration, serving } = formData;

  return (
    <div className="new-recipe-form-container">
      <h2>Add New Recipe:</h2>
      <h3>Import a recipe from a website</h3>
      <button>Import Recipe</button>
      <h3>Or add one below:</h3>
      <form className="new-recipe-form">
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          type="text"
          name="recipeName"
          value={recipeName}
          onChange={handleFormChange}
          required
        />
        <label htmlFor="recipeImage">Add Image:</label>
        <input
          type="text"
          name="recipeImage"
          value={recipeImage}
          onChange={handleFormChange}
        />
        <label htmlFor="duration">Cooking Time</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={handleFormChange}
        />
        <label htmlFor="serving">Serving Size:</label>
        <input
          type="text"
          name="serving"
          value={serving}
          onChange={handleFormChange}
        />
        <p>Enter Categories:</p>
        <InputCategoryTags tags={tags} setTags={setTags} />
        <p>Instructions:</p>
        <InstructionList />
      </form>
    </div>
  );
};

export default AddRecipeForm;
