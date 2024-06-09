import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddRecipeForm from './Components/AddRecipeForm/AddRecipeForm.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import NotFoundPage from './Components/NotFoundPage.jsx';
import RecipeItem from './Components/RecipeListItem/RecipeListItem.jsx';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <StarterPage />
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  //   errorElement: <NotFoundPage />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  //   errorElement: <NotFoundPage />,
  // },
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
    element: <RecipeItem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
