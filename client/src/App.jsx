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

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <StarterPage />
  // },
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
  },
  {
    path: "/recipes/:recipeId",
    element: <RecipeDetails />,
  },
  {
    path: "/categories/:categoryId",
    element: <CategoryDetails />
  }
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