import Router from "@koa/router";

import ping from "./ping.ts";
import health from "./health.ts";

const api = new Router({ prefix: "/api/v1" });

api.use(ping.routes(), ping.allowedMethods());
api.use(health.routes(), health.allowedMethods());

export default api;