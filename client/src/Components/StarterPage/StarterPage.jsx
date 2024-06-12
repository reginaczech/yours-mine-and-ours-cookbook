import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarStarter from "../NavBarStarter/NavBarStarter";

const StarterPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/login`);
  };

  return (
    <>
      <NavBarStarter />

      <div className="font-['Georgia'] relative mx-auto my-10">
        <img
          className="h-[600px] mx-auto object-cover rounded-md"
          src="https://d3vpszern3jgjo.cloudfront.net/wp-content/uploads/2020/09/ingredients-768x419.png"
          alt="Starter image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-48 h-14 flex items-center justify-center bg-white opacity-0 border-2 ">
            {" "}
          </div>
          <h2 className="text-theme-dark-grey text-7xl font-bold bg-theme-light-yellow opacity-100 py-7 my-20">
            Yours, Mine and Our's Cookbooks
          </h2>
          <div className="w-56 h-14 flex items-center justify-center bg-theme-dark-yellow border-2 border-theme-dark-yellow rounded-xl text-xl font-bold hover:bg-theme-light-yellow hover:scale-110 hover:border-theme-light-yellow ">
            <button className="" onClick={handleClick}>
              Let's Get Cooking!
            </button>
          </div>
        </div>
      </div>
      {/* <img
          src="https://t3.ftcdn.net/jpg/05/15/82/20/360_F_515822014_L4aurIrqCks24haCUIPSWpZ2VX9ls0Q6.jpg"
          w-full
        />
        <h1>Yours, Mine and Our's Cookbooks</h1>
        <button className="starter-button" onClick={handleClick}>
          Let's Get Cooking!
        </button> */}
    </>
  );
};

export default StarterPage;
