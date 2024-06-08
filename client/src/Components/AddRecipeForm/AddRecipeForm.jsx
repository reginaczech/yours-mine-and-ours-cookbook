import React, { useEffect, useState } from "react";
import "./AddRecipeForm.css";
import InputCategoryTags from "../InputCategoryTags/InputCategoryTags";
import InstructionList from "../InstructionList/InstructionList";
import IngredientList from "../IngredientList/IngredientList";
import ImportRecipe from "../ImportRecipe/ImportRecipe";
import { postNewRecipe } from "../../APIServices/fetchServices";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    authorId: 1,
    recipeName: "",
    recipeImage: "",
    durationAmt: 1,
    durationUnit: "",
    serving: 1,
  });
  const [tags, setTags] = useState([]); //prop drill this from the new recipe form
  const [instructionList, setInstructionList] = useState([
    { instructItem: "" },
  ]);
  const [ingredientList, setIngredientList] = useState([
    { ingName: "", ingAmount: "", ingUnit: "" },
  ]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  //on submitFormChange -> add the tag data to the submission
  const handleSubmit = (event) => {
    event.preventDefault();

    //add the categories[{id: "1, categoryName: "tag"}], instructions[], ingredients[{}]
    const categoryArr = tags.map(({ categoryName }) => ({ categoryName }));
    const instructionArr = [];
    instructionList.map((inst) => {
      instructionArr.push(inst.instructItem);
    });

    const updatedFormData = {
      ...formData,
      categories: categoryArr,
      instructions: instructionArr,
      ingredients: ingredientList,
    };

    postNewRecipe(updatedFormData).then((data) => {
      console.log("Posted!", data);
      setFormData({
        authorId: 1,
        recipeName: "",
        recipeImage: "",
        durationAmt: 0,
        durationUnit: "",
        serving: 1,
      });
      setTags([]);
      setInstructionList([{ instructItem: "" }]);
      setIngredientList([{ ingName: "", ingAmount: "", ingUnit: "" }]);
    });
  };

  const { recipeName, recipeImage, durationAmt, durationUnit, serving } =
    formData;

  return (
    <div className="new-recipe-form-container">
      <h2>Add New Recipe:</h2>
      <ImportRecipe
        formData={formData}
        setFormData={setFormData}
        instructionList={instructionList}
        setInstructionList={setInstructionList}
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
      />
      <h3>Or add one below:</h3>
      <form
        name="newRecipeForm"
        className="new-recipe-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          value={recipeName}
          onChange={handleFormChange}
          required
        />
        <label htmlFor="recipeImage">Add Image:</label>
        <input
          type="text"
          id="recipeImage"
          name="recipeImage"
          value={recipeImage}
          onChange={handleFormChange}
        />
        <label htmlFor="durationAmt">Cooking Time</label>
        <input
          type="text"
          id="durationAmt"
          name="durationAmt"
          value={durationAmt}
          onChange={handleFormChange}
        />
        <label htmlFor="durationUnit">Cooking Time Unit</label>
        <input
          type="text"
          id="durationUnit"
          name="durationUnit"
          value={durationUnit}
          onChange={handleFormChange}
        />
        <label htmlFor="serving">Serving Size:</label>
        <input
          type="text"
          id="serving"
          name="serving"
          value={serving}
          onChange={handleFormChange}
        />
        <p>Enter Categories:</p>
        <InputCategoryTags tags={tags} setTags={setTags} />
        <InstructionList
          instructionList={instructionList}
          setInstructionList={setInstructionList}
        />
        <IngredientList
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
        />
        <button className="submitBtn" type="submit">
          Create New Recipe!
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
