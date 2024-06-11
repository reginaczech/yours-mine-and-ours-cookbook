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
    durationAmt: 0,
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
        console.log(`Post new recipe - error on client: ${error}`);
      }
    });
  };

  const { recipeName, image, durationAmt, durationUnit, serving } = formData;

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="mt-5 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-theme-dark-grey">
          Add New Recipe
        </h2>
        <ImportRecipe
          formData={formData}
          setFormData={setFormData}
          instructionList={instructionList}
          setInstructionList={setInstructionList}
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
        />

        <h3 className="mt-10 text-lg font-medium leading-6 text-theme-dark-grey">
          Or add one below:
        </h3>
        <form
          className="mt-5 flex flex-col space-y-4 w-1/3"
          name="newRecipeForm"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="recipeName"
            className="block text-sm font-medium leading-6 text-theme-dark-grey"
          >
            Recipe Name:
          </label>
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            value={recipeName}
            onChange={handleFormChange}
            required
            className="block w-full mt-2 rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
          />
          <div className="mt-2 flex flex-col gap-x-10">
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-theme-dark-grey"
            >
              Add Image:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={image}
              onChange={handleFormChange}
              className="block mt-2 w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex gap-x-10">
            <div>
              <label
                htmlFor="durationAmt"
                className="block text-sm font-medium leading-6 text-theme-dark-grey"
              >
                Cooking Time
              </label>
              <input
                type="text"
                id="durationAmt"
                name="durationAmt"
                value={durationAmt}
                onChange={handleFormChange}
                className="max-w-24 mt-2 block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="durationUnit"
                className="block text-sm font-medium leading-6 text-theme-dark-grey"
              >
                Time Units
              </label>
              <input
                type="text"
                id="durationUnit"
                name="durationUnit"
                placeholder="minutes"
                value={durationUnit}
                onChange={handleFormChange}
                className=" max-w-24 mt-2 block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <label
            htmlFor="serving"
            className="block text-sm font-medium leading-6 text-theme-dark-grey"
          >
            Serving Size:
          </label>
          <input
            type="text"
            id="serving"
            name="serving"
            placeholder="1"
            value={serving}
            onChange={handleFormChange}
            className="block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
          />
          <p className="block text-sm font-medium leading-6 text-theme-dark-grey">
            Enter Categories:
          </p>
          <InputCategoryTags tags={tags} setTags={setTags} />
          <InstructionList
            instructionList={instructionList}
            setInstructionList={setInstructionList}
          />
          <IngredientList
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
          />
          <button
            className="mx-20 rounded-md bg-theme-dark-yellow px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-light-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-light-grey"
            type="submit"
          >
            Create New Recipe!
          </button>
          <br></br>
        </form>
      </div>
    </>
  );
};

export default AddRecipeForm;
