import React, { useEffect, useState } from "react";
import "./AddRecipeForm.css";
import InputCategoryTags from "../InputCategoryTags/InputCategoryTags";
import InstructionList from "../InstructionList/InstructionList";
import IngredientList from "../IngredientList/IngredientList";
import ImportRecipe from "../ImportRecipe/ImportRecipe";
import { postNewRecipe } from "../../APIServices/fetchServices";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    authorId: 1,
    recipeName: "",
    image: "",
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

  const navigate = useNavigate();

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
      try {
        console.log("Posted!", data);
        setFormData({
          authorId: 1,
          recipeName: "",
          image: "",
          durationAmt: 0,
          durationUnit: "",
          serving: 1,
        });
        setTags([]);
        setInstructionList([{ instructItem: "" }]);
        setIngredientList([{ ingName: "", ingAmount: "", ingUnit: "" }]);

        //route to the /recipe/:id page
        navigate(`/recipes/${data.id}`);
      } catch (error) {
        console.log(`Post new recipe - error on client: ${error}`)
      }
    });
  };

  const { recipeName, image, durationAmt, durationUnit, serving } = formData;

  return (
    <>
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
          <label htmlFor="image">Add Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
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
    </>
  );
};

export default AddRecipeForm;
