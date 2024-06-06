"use strict";

import pupateer from "puppeteer";

//The webscraping of a website will occur here.
//This will be for a static site but pupateer has the capabilities to scrap a dynamic site if required in the future.

const srapeWebPage = async () => {
  try {
    //opens browser
    const browser = await pupateer.launch({
      headless: false,
      defaultViewport: null,
    });
    //navigate to page
    const page = await browser.newPage();
    await page.goto(
      "https://www.bbc.co.uk/food/recipes/harissa_chicken_and_orzo_60426", //BBC Food Recipe specific
      { waitUntil: "domcontentloaded" }
    );

    // all the web scraping will happen here
    const getRecipeData = await page.evaluate(() => {
      let data = [];

      //recipeName
      const title = document.head
        .querySelector('meta[property="og:title"]')
        .getAttribute("content");

      //recipeImage
      const image = document.head
        .querySelector('meta[property="og:image"]')
        .getAttribute("content");

      //get details


      recipeDetails = { recipeName: title, image: image };
      data.push(recipeDetails);
      return data;
    });

    console.log(getRecipeData);

    //close browser
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

srapeWebPage();

export default srapeWebPage;

;
// console.log("🚀 ~ getRecipeData ~ details:", details);

// for (const detail of details) {
//   const servingSize = detail.querySelector(".recipe-metadata__serving").innerText;

//   const cookingTime = detail.querySelector(".recipe-metadata__cook-time").innerText;

// }
