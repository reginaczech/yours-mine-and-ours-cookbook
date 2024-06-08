const rootURL = "http://localhost:3000";

//fetch service - get all recipes
export async function getAllRecipes() {
  try {
    const response = await fetch(rootURL + "/recipes");
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.log(`get all recipes api service failed: ${error}`)
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
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log("🚀 ~ postNewRecipe ~ data:", data)
    console.log('posting in fetch api')
    // const postedRecipe = await response.json();//err
    // console.log("🚀 ~ postNewRecipe ~ postedRecipe:", postedRecipe)
    return response;
  } catch (error) {
    console.log(`post new recipe api service failed: ${error}`);
  }
}