import Router from "@koa/router";

const health = new Router();
health.get("/health", (ctx) => {
  ctx.body = { ok: true, uptime: process.uptime() };
});

export default health;