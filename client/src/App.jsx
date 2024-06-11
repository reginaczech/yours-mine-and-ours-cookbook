import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddRecipeForm from "./Components/AddRecipeForm/AddRecipeForm.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";
import RecipeDetails from "./Components/RecipeDetails/RecipeDetails.jsx";
import NavBar from './Components/NavBar/NavBar'
import CategoryDetails from './Components/CategoryDetails/CategoryDetails.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import StarterPage from './Components/StarterPage/StarterPage.jsx';
import RecipesList from './Components/RecipesList/RecipesList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StarterPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/my-profile",
    element: <Dashboard />,
    // elements: RecipesList, CategoriesList, CookbooksList
    errorElement: <NotFoundPage />,
  },
  {
    path: "/add-new-recipe",
    element: <AddRecipeForm />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/recipes/:recipeId",
    element: <RecipeDetails />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/categories/:categoryId",
    element: <CategoryDetails />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/my-cookbooks/:categoryId",
    element: <CategoryDetails />,
    errorElement: <NotFoundPage />,
  },
]);

const App = () => {
  return (
    <>
      <NavBar/>
      <RouterProvider router={router} />
    </>
  );
}

export default App