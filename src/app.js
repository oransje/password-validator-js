import Koa from 'Koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
