import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../../APIServices/fetchServices";
import NavBar from "../NavBar/NavBar";
import RecipesList from "../RecipesList/RecipesList";

//add children: RecipesList, CategoriesList, CookBooksList

const Dashboard = () => {
  const [recipesList, setRecipesList] = useState([]);

  //fetch getallrecipes
  useEffect(() => {
    getAllRecipes().then((data) => {
      setRecipesList(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <RecipesList recipesList={recipesList} setRecipesList={setRecipesList} />
    </>
  );
};

export default Dashboard;
