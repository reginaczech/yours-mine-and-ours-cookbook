
# Project Title

**Yours, Mine and Ours: Cookbook** - creating cookbooks and sharing between friends


## Description

This application gives recipe aficionados the ability to add their own recipe manually or pull directly from a website. They are able to tag each recipe with a category, add ingredients and instructions. The user can view all the recipes in their profile page or view them by category.

Ultimately, they will be able create cookbooks in collaboration with a 'friend/s'. For each cookbook, the user would be able to add contributors (from friends list). The original recipes in the cookbooks can only be editted by the main creator of the recipe. Friends can add comments.


## Getting Started

### Dependencies

1. Run `npm i` in the `/server` and `/client` folders to get all the dependencies.

### Executing program

Front End:

1. From the `/client` directory, run the `npm run dev` command to start the client

Back End:

1. Have [PostgreSQL](https://www.postgresql.org/download/) installed, and running at the default port.
2. Have [prisma](https://www.prisma.io/docs/getting-started) installed, and running at the default port with prisma studio for easy db viewing.
2. Set up your `DATABASE_URL` in the .env file to your own postgres database path using the prisma documentation for support [Prisma Setup](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-postgresql)
3. Have [Nodemon](https://github.com/remy/nodemon) as a global dependency to easily monitor your file changes.
4. From the `/server` directory, run the `nodemon index.js` to start your backend server.



## Version History

* 0.1
    * Initial Release


## Acknowledgments

Inspiration, code snippets, etc.
* [react-surveyman](https://github.com/prakhar1989/react-surveyman)
