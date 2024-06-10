"use strict";

const prisma = require("../models/index");

exports.register = async (ctx, next) => {
  const { firstName, lastName, email, password } = ctx.request.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    ctx.status = 409;
    ctx.body = { error: "409", message: "User already exists" };
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });
    console.log(newUser);
    ctx.status = 201;
    ctx.body = newUser;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error, message: "Could not create user" };
  }
};

exports.login = async (ctx, next) => {
  try {
    const { email, password } = ctx.request.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        recipes: {
          select: {
            id: true,
          },
        },
      },
    });
    //validate the password
    console.log(user);
    ctx.status = 201;
    ctx.body = user;
  } catch (error) {
    ctx.status = 400;
    ctx.body = `post: login user failed with error ${error}`;
  }
};
