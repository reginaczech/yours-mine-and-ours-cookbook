import React, { useEffect, useState } from "react";
import { getAllRecipes, getCategories } from "../../APIServices/fetchServices";
import RecipesList from "../RecipesList/RecipesList";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

//add: RecipesList, CategoriesList, CookBooksList

const Dashboard = () => {
  const [recipesList, setRecipesList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const navigate = useNavigate();

  //fetch getallrecipes
  useEffect(() => {
    getAllRecipes().then((data) => {
      setRecipesList(data);
    });

    getCategories().then((data) => setCategoryList(data));
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div className="m-10 rounded-2xl">
          <h2 className="pt-5 pl-10 font-['Georgia'] font-bold text-3xl">
            My Recipes
          </h2>
          <RecipesList
            recipesList={recipesList}
            setRecipesList={setRecipesList}
          />
        </div>
      </div>
      <div className="m-10 rounded-2xl">
        <h2 className="pt-5 pl-10 font-['Georgia'] font-bold text-3xl">
          My Categories
        </h2>
        <div className="m-10 flex gap-x-10 drop-shadow-md snap-x snap-mandatory overflow-x-scroll overflow-hidden no-scrollbar ">
          {categoryList &&
            categoryList.map((category) => (
              <div key={category.id}>
                <div className="flex flex-col border-2 h-64 w-56 rounded-xl border-theme-light-grey content-center hover:border-4 hover:border-theme-dark-yellow hover:text-theme-dark-yellow">
                  <img
                    className="w-56 overflow-hidden object-cover rounded-t-xl cursor-pointer "
                    onClick={() => navigate(`/categories/${category.id}`)}
                    src="https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk="
                  />
                  <Link
                    className="p-2 font-['Georgia'] text-lg text-center"
                    to={`/categories/${category.id}`}
                  >
                    {category.categoryName}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* <div className="m-10 rounded-2xl">
        <h2 className="pt-5 pl-10 font-['Georgia'] font-bold text-3xl">
          My Cookbooks:
        </h2>
      </div> */}
    </>
  );
};

export default Dashboard;
