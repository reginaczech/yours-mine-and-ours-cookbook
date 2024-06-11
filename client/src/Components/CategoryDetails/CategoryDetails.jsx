import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipesFromCategories } from '../../APIServices/fetchServices';
import RecipesList from '../RecipesList/RecipesList';
import NavBar from '../NavBar/NavBar';

const CategoryDetails = () => {
  const [recipeByCatList, setRecipeByCatList] = useState([]);
  const params = useParams();

  //fetch: get all recipes within the category by category id
  useEffect(() => {
    getRecipesFromCategories(params.categoryId).then(data => setRecipeByCatList(data) );
    },[])

    console.log("🚀 ~ CategoryDetails ~ recipeByCatList:", recipeByCatList)
  console.log(recipeByCatList)

  return (
    <>
      <NavBar />
      <h2 className="pt-5 pl-10 font-['Georgia'] font-bold text-3xl">
        {}
      </h2>
      <RecipesList
        recipesList={recipeByCatList}
        setRecipesList={setRecipeByCatList}
      />
    </>
  );
};

export default CategoryDetails;