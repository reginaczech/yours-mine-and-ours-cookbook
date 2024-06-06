"use strict";

const Router = require("@koa/router");
const controllers = require("./controllers/index");

const router = new Router();

//add new recipe
router.post("/add-new-recipe", controllers.addRecipe);

//get recipe by id
router.get("/recipes/:id", controllers.getRecipe);

module.exports = router;
