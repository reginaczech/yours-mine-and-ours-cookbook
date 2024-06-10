import React, { useEffect, useState } from "react";
import {
  getAllRecipes,
  getCategories,
} from "../../APIServices/fetchServices";
import RecipesList from "../RecipesList/RecipesList";
import { Link } from "react-router-dom";

//add: RecipesList, CategoriesList, CookBooksList

const Dashboard = () => {
  const [recipesList, setRecipesList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  //fetch getallrecipes
  useEffect(() => {
    getAllRecipes().then((data) => {
      setRecipesList(data);
    });

    getCategories().then(data =>
      setCategoryList(data)
    );
  }, []);

  return (
    <>
      <div className="my-recipes-container">
        <h2>My Recipes:</h2>
        <RecipesList
          recipesList={recipesList}
          setRecipesList={setRecipesList}
        />
      </div>
      <div className="my-categories-container">
        <h2>My Categories:</h2>
        <div className="category-list-container">
          {categoryList &&
            categoryList.map((category) => (
              <div className="category-list-item" key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.categoryName}</Link>
              </div>
            ))}
        </div>
      </div>
      <div className="my-cookbooks-contrainer">
        <h2>My Cookbooks:</h2>
      </div>
    </>
  );
};

export default Dashboard;
