import Koa from 'koa';
import logger from "koa-logger"
import router from "./src/router"
const app = new Koa();

app.use(logger())
app.use(router.routes()).use(router.allowedMethods());

const port = 5000;
app.listen(port);
console.log(`listening on port ${port}`)