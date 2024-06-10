const rootURL = "http://localhost:3000";

//fetch service - get categories
export const getCategories = () => fetchGetRequest(`${rootURL}/categories`);
//fetch service - get all recipes
export const getAllRecipes = () => fetchGetRequest(`${rootURL}/recipes`);
//fetch service - get recipe by id
export const getRecipeById = (id) => fetchGetRequest(`${rootURL}/recipes/${id}`);

//fetch service - post new recipe
export const postNewRecipe = (data) => fetchPostRequest(`${rootURL}/add-new-recipe`, data);
//fetch service - post url for webscraping and recieve recipe data
export const postWebScrapingURL = (data) => fetchPostRequest(`${rootURL}/webscraped-recipe`, data);


const fetchGetRequest = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(`${error.message} while fetching /${url}`);
  }
};


const fetchPostRequest = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(`${error.message} while fetching /${url}`);
  }
};