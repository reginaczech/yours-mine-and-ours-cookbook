"use strict";

const Router = require("@koa/router");
const controllers = require("./controllers/index");
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

module.exports = router;
