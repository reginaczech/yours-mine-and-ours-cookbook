import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipesFromCategories } from '../../APIServices/fetchServices';
import RecipesList from '../RecipesList/RecipesList';

const CategoryDetails = () => {
  const [recipeByCatList, setRecipeByCatList] = useState([]);
  const params = useParams();

  //fetch: get all recipes within the category by category id
  useEffect(() => {
    getRecipesFromCategories(params.categoryId).then(data =>setRecipeByCatList(data) );
  },[])


  return (
    <>
      <div>Test</div>
      <RecipesList
        recipesList={recipeByCatList}
        setRecipesList={setRecipeByCatList}
      />
    </>
  );
};

export default CategoryDetails;