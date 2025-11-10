import type { Middleware } from "koa";

export const errorMiddleware: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err.status || 500;
    ctx.body = {
      ok: false,
      error: err.message || "Internal Server Error",
    };
    // 可以加告警/日志
  }
};