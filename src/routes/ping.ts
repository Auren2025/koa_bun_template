import Router from "@koa/router";

const ping = new Router();
ping.get("/ping", (ctx) => { ctx.body = { pong: true }; });

export default ping;