"use strict";

const pupateer = require("puppeteer");

//The webscraping of a website will occur here.
//This will be for a static site but pupateer has the capabilities to scrap a dynamic site if required in the future.

// const URL =
// "https://www.allrecipes.com/chocolate-peanut-butter-protein-bars-recipe-8421618"; //allrecipes
// const URL = "https://www.bbc.co.uk/food/recipes/harissa_chicken_and_orzo_60426" //BBC Food Recipe specific

exports.srapeWebPage = async (ctx, next) => {
  try {
    const { url } = ctx.request.body;

    //opens browser
    const browser = await pupateer.launch({
      headless: true,
      defaultViewport: null,
    });
    //navigate to page
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "domcontentloaded" });


    // all the web scraping will happen here
    const recipeData = await page.evaluate(() => {

      //conversions:
      // const convertIngAmount = (ingAmount) => {
      //   const splitAmount = ingAmount.split('/');
      //   return splitAmount[0] / splitAmount[1];
      // }
      //^ not needed at the moment, get amount in string

      //recipeName
      const title = document.head
        .querySelector('meta[property="og:title"]')
        .getAttribute("content");

      //recipe Image
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
        ingAmount: ing.querySelector(
          "p span[data-ingredient-quantity='true']"
        ).innerText,
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
        image: image,
        instructionList: instructData,
        ingredientList: ingData,
      };

      return recipeDetails;
    });

    //close browser
    await browser.close();

    ctx.status = 201;
    ctx.body = recipeData;
  } catch (error) {
    ctx.status = 500;
    ctx.body = `post recipe failed with error ${error}`;
    console.log(error);
  }
};
