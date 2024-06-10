"use strict";

const Router = require("@koa/router");
const controllers = require("./controllers/index");
const userControllers = require("./controllers/user")
const { srapeWebPage } = require("./controllers/webscrape");

const router = new Router();

//add new recipe
router.post("/add-new-recipe", controllers.addRecipe);
//get recipe by id
router.get("/recipes/:id", controllers.getRecipeById);
//get all recipes
router.get("/recipes", controllers.getAllRecipes)

//post url to be webscrapped
router.post("/webscraped-recipe", srapeWebPage);

//get categories
router.get("/categories", controllers.getCategories)
//get recipies from category
router.get("/categories/:id", controllers.getRecipesFromCategories);

//register new user
router.post("/register", userControllers.register)
//login user
router.post("/login", userControllers.login)

module.exports = router;
