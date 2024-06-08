"use strict";

import pupateer from "puppeteer";

//The webscraping of a website will occur here.
//This will be for a static site but pupateer has the capabilities to scrap a dynamic site if required in the future.

const URL =
  "https://www.allrecipes.com/chocolate-peanut-butter-protein-bars-recipe-8421618"; //allrecipes
// const URL = "https://www.bbc.co.uk/food/recipes/harissa_chicken_and_orzo_60426" //BBC Food Recipe specific

const srapeWebPage = async () => {
  try {
    //opens browser
    const browser = await pupateer.launch({
      headless: true,
      defaultViewport: null,
    });
    //navigate to page
    const page = await browser.newPage();

    await page.goto(URL, { waitUntil: "domcontentloaded" });

    // all the web scraping will happen here
    const recipeData = await page.evaluate(() => {
      let data = [];

      //recipeName
      const title = document.head
        .querySelector('meta[property="og:title"]')
        .getAttribute("content");

      //recipeImage
      const image = document.head
        .querySelector('meta[property="og:image"]')
        .getAttribute("content");

      //get ingredients
      const ingredients = Array.from(
        document.querySelectorAll(".mntl-structured-ingredients__list-item ")
      );
      const ingData = ingredients.map((ing) => ({
        ingName: ing.querySelector("p span[data-ingredient-name='true']")
          .innerText,
        ingAmount: ing.querySelector("p span[data-ingredient-quantity='true']")
          .innerText,
        ingUnit: ing.querySelector("p span[data-ingredient-unit='true']")
          .innerText,
      }));

      //get instructions
      const instructions = Array.from(
        document.querySelectorAll("div[id='recipe__steps-content_1-0'] ol li")
      );
      const instructData = instructions.map((inst) => ({
        instructItem: inst.querySelector("p").innerText,
      }));

      const recipeDetails = {
        recipeName: title,
        recipeImage: image,
        instructionList: instructData,
        ingredientList: ingData,
      };
      data.push(recipeDetails);

      return data;
    });

    console.log(recipeData);

    //close browser
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

srapeWebPage();

export default srapeWebPage;
