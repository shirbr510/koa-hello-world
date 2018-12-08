import Router from 'koa-router'
import helloWorld from "./helloworld"
const router = new Router()
const apiRouter = new Router();

apiRouter.use('/hello',helloWorld.routes())

router.get('/health',async ctx => {
    ctx.body = 'OK';
});

router.use('/api',apiRouter.routes())



export default router;