import Koa from "koa";
import { errorMiddleware } from "./middlewares/error.ts";
import { loggerMiddleware } from "./middlewares/logger.ts";
import api from "./routes/index.ts";

const app = new Koa();

// 全局中间件
app.use(errorMiddleware);
app.use(loggerMiddleware);

// 路由
app.use(api.routes());
app.use(api.allowedMethods());

// 监听
const PORT = Number(process.env.PORT ?? 3000);
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));