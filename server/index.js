const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router");
const port = 3000;

const app = new Koa();

app.use(bodyParser());
app.use(cors());

app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.body = "The route you want does not exist";
  }
});

app.use(router.routes());

app.listen(port, () => console.log(`Running on port http://localhost:${port}`));
