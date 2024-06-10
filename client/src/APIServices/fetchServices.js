//local root
// const rootURL = "http://localhost:3000";

//vercel deployment url
const rootURL = "https://yours-mine-and-ours-cookbook-my27.vercel.app/";

//fetch service - get all recipes
export const getAllRecipes = () => fetchGetRequest(`${rootURL}/recipes`);
//fetch service - get recipe by id
export const getRecipeById = (id) =>
  fetchGetRequest(`${rootURL}/recipes/${id}`);
//fetch service - get categories
export const getCategories = () => fetchGetRequest(`${rootURL}/categories`);
//fetch service - get recipes by category
export const getRecipesFromCategories = (id) =>
  fetchGetRequest(`${rootURL}/categories/${id}`);

//fetch service - post new recipe
export const postNewRecipe = (data) =>
  fetchPostRequest(`${rootURL}/add-new-recipe`, data);
//fetch service - post url for webscraping and recieve recipe data
export const postWebScrapingURL = (data) =>
  fetchPostRequest(`${rootURL}/webscraped-recipe`, data);
//fetch service - post login
export const postLogin = (data) => fetchPostRequest(`${rootURL}/login`, data);
//fetch service - post login
export const postRegister = (data) =>
  fetchPostRequest(`${rootURL}/register`, data);

const fetchGetRequest = async (url) => {
  try {
    const response = await fetch(
      url
      //   {
      //   method: "GET",
      //   credentials: "include",
      //   mode: "cors",
      //   headers: { "Content-Type": "application/json" },
      // }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`${error.message} while fetching /${url}`);
  }
};

const fetchPostRequest = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      // credentials: "include",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`${error.message} while fetching /${url}`);
  }
};
