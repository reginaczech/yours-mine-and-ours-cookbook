import React, { useState } from "react";
import AddRecipeForm from "../AddRecipeForm/AddRecipeForm";
import NavBar from "../NavBar/NavBar";

const Dashboard = () => {

  return (
    <>
      <div className="AddNewRecipePage">
        <NavBar />
        <AddRecipeForm />
      </div>
    </>
  );
};

export default Dashboard;
