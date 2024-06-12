import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCategories,
  getRecipesFromCategories,
} from "../../APIServices/fetchServices";
import RecipesList from "../RecipesList/RecipesList";
import NavBar from "../NavBar/NavBar";

const CategoryDetails = () => {
  const [recipeByCatList, setRecipeByCatList] = useState([]);
  const [categoryName, setCategoryName] = useState({});
  const params = useParams();

  //fetch: get all recipes within the category by category id
  useEffect(() => {
    getRecipesFromCategories(params.categoryId).then((data) => {
      setRecipeByCatList(data);
    });

    getCategories().then((data) => {
    console.log("🚀 ~ getCategories ~ data:", data)

      const found = data.find((el) => {
        console.log("el", el.id == params.categoryId);
       return el.id == params.categoryId;
      });
      console.log("🚀 ~ data.find ~ data:", found);
      setCategoryName(found);
    });
  }, []);


  return (
    <>
      <NavBar />
      <h2 className="pt-5 pl-10 font-['Georgia'] font-bold text-3xl">
        {categoryName.categoryName}
      </h2>
      <RecipesList
        recipesList={recipeByCatList}
        setRecipesList={setRecipeByCatList}
      />
    </>
  );
};

export default CategoryDetails;
