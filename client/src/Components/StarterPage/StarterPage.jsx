import React from "react";
import { useNavigate } from "react-router-dom";

const StarterPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/login`);
  };

  return (
    <>
      <h1>Yours, Mine and Our's Cookbooks</h1>
      <button className="starter-button" onClick={handleClick}>
        Let's Get Cooking!
      </button>
    </>
  );
};

export default StarterPage;
