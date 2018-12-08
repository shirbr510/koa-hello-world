import Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const port = 5000;
app.listen(port);
console.log(`listening on port ${port}`)