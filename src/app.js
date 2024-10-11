import Koa from 'Koa';
import bodyParser from '@koa/bodyparser';
import router from './router.js';

const app = new Koa();

app.use(bodyParser());
app.use(router.routes(app));
app.use(router.allowedMethods());


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
