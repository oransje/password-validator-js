import Router from "@koa/router";
import validate from "./validate.js";

const router = new Router();

router.post('/password-validator', async (ctx) => {
  console.log('[POST] /password-validator endpoint');
  const data = ctx.request.body;
  const password = data['password'];
  const errors = validate(password);
  const isEmpty =  errors.length === 0;

  if(isEmpty) {
      console.log('[POST] 202 /password-validator');
      ctx.status = 202;
      return;
  }

  console.log('[POST] 400 /password-validator');
  ctx.status = 400;
  ctx.body = {
      errors,
  };
});

router.all('/(.*)', async (ctx) => {
    console.log('[ALL] 404 NOT FOUND');
    ctx.status = 404;
    ctx.body = {
        message: "Resource not found",
    };
});

export default router;