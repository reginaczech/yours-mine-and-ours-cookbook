"use strict";

const prisma = require("../models/index");

exports.addRecipe = async (ctx, next) => {
  try {
    // console.log(ctx.request.body);
    const {
      authorId,
      recipeName,
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
        //image: image,
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
                create: { units: ingredient.ingUnit }, //TODO: connect if units exist
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

exports.getRecipe = async (ctx, next) => {
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
