"use strict";

const prisma = require("../models/index");

exports.addRecipe = async (ctx, next) => {
  try {
    // console.log(ctx.request.body);
    const {
      authorId,
      recipeName,
      image,
      durationAmt,
      durationUnit,
      categories,
      instructions,
      ingredients,
    } = ctx.request.body;

    //find or create an ingredient ->
    //create the recipe
    const newRecipe = await prisma.recipe.create({
      data: {
        authorId: authorId,
        recipeName: recipeName,
        image: image,
        durationAmt: durationAmt,
        durationUnit: durationUnit,
        categories: {
          connectOrCreate: categories.map((category) => {
            return {
              where: { categoryName: category.categoryName }, //if categoryname exists in the Category table, connect and pass the id
              create: { categoryName: category.categoryName }, //if categoryName does not exist, create a new category
            };
          }),
        },
        //servingSize: servingSize,
        //measureUnit: measureUnit,
        instructions: instructions,
        ingredients: {
          create: ingredients.map((ingredient) => {
            return {
              ingName: ingredient.ingName,
              ingAmount: ingredient.ingAmount,
              ingUnit: {
                // connectOrCreate: {
                //   where: { units: ingredient.ingUnit },
                create: { units: ingredient.ingUnit }, //TODO: connect if the measurement type exists
                // },
              },
            };
          }),
        },
        //comments: comments,
        //rating: rating,
        //favorite: favorite,
      },
      include: { categories: true, ingredients: true },
    });
    console.log(newRecipe);
    ctx.body = newRecipe;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    ctx.body = `post recipe failed with error ${error}`;
    console.log(error);
  }
};

exports.getRecipeById = async (ctx, next) => {
  try {
    //console.log(ctx.params);
    const id = Number(ctx.params.id);
    // console.log(id);
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: id,
        authorId: 1, //TODO: change to a dynamic user_id later
      },
      include: { categories: true, ingredients: true },
    });
    ctx.body = recipe;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    ctx.body = `get recipe failed with error ${error}`;
  }
};

exports.getAllRecipes = async (ctx, next) => {
  try {
    const recipes = await prisma.recipe.findMany({
      // orderBy: {
      //   recipeName: "desc",
      // },
      include: {
        categories: true,
        ingredients: true,
        // ingredients: { include: { ingUnit: true } },
      },
    });
    ctx.body = recipes;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    ctx.body = `get all recipes failed with error ${error}`;
  }
};

exports.getCategories = async (ctx, next) => {
  try {
    const categories = await prisma.category.findMany();
    ctx.body = categories;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    ctx.body = `get categories failed with error ${error}`;
  }
};

exports.getRecipesFromCategories = async (ctx, next) => {
  try {
    const categoryId = Number(ctx.params.id);
    const recipes = await prisma.recipe.findMany({
      where: {
        categories: {
          every: {
            id: categoryId
          }
        }
      },
      include: {
        categories: true
      }
    });
    ctx.body = recipes;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    ctx.body = `get recipes by category id failed with error ${error}`;
  }
};
