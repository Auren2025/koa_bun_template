import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = { msg: "root" };
});

router.get("/ping", (ctx) => {
  ctx.body = { pong: true };
});

// 注册路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("http://localhost:3000");
});