const rootURL = "http://localhost:3000";

//fetch service - get all recipes
export async function getAllRecipes() {
  try {
    const response = await fetch(rootURL + "/recipes");
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.log(`get all recipes api service failed: ${error}`);
  }
}

//fetch service - get recipe by id

//fetch service - post new recipe
export async function postNewRecipe(data) {
  try {
    const response = await fetch(rootURL + "/add-new-recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const postedRecipe = await response.json();
    return postedRecipe;
  } catch (error) {
    console.log(`Post new recipe API service failed: ${error}`);
  }
}

//fetch service - post url for webscraping and recieve recipe data
export async function postWebScrapingURL(data) {
  try {
    const response = await fetch(rootURL + "/webscraped-recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const scrapedRecipe = await response.json();
    return scrapedRecipe;
  } catch (error) {
    console.log(`Webscraping recipe API service failed: ${error}`);
  }
}
