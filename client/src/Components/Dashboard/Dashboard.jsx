import React, { useState } from "react";
import AddRecipeForm from "../AddRecipeForm/AddRecipeForm";
import NavBar from "../NavBar/NavBar";
import { postNewRecipe } from "../../APIServices/fetchServices";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    authorId: 1,
    recipeName: "",
    //recipeImage: "",
    durationAmt: 0,
    durationUnit: "",
    serving: 1,
  });

  const postData = async (x) => {
    console.log("🚀 ~ postData ~ formData:", formData);
    await postNewRecipe(x).then((data) => console.log("data", data));
  };

  return (
    <>
      <div className="AddNewRecipePage">
        <NavBar />
        <AddRecipeForm
          formData={formData}
          setFormData={setFormData}
          postData={postData}
        />
      </div>
    </>
  );
};

export default Dashboard;
