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
    const metaDetails = await page.evaluate(() => {
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
      const ingredients = document.body.querySelectorAll(
        ".recipe-ingredients-wrapper"
      );
      console.log(ingredients);
      // for (const detail of details) {
      //   const servingSize = detail.querySelector(".recipe-metadata__serving").innerText;
      //   console.log(servingSize)
      // }

      recipeDetails = {
        recipeName: title,
        image: image,
        ingredients: ingredients
      };
      data.push(recipeDetails);
      return data;
    });


    console.log(metaDetails);

    //close browser
    await browser.close();

  } catch (error) {
    console.log(error);
  }
};

srapeWebPage();

export default srapeWebPage;
