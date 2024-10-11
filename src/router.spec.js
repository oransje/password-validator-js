import router from './router.js';
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import Koa from 'koa';
import bodyParser from '@koa/bodyparser';

describe('/', () => {
  let app;

  beforeEach(() => {
    app = new Koa();
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
  });

  describe ('/password-validator', async () => {
    describe('with a valid password', async () => {
      it('responds 202 no content', async () => {
        const response = await request(app.callback()).post('/password-validator').send({ password: 'Valid1Pass!' });
    
        expect(response.status).toBe(202);
      });
    });

  
    describe('with invalid password', async () => {
      it('responds 400 bad request', async () => {
        const response = await request(app.callback()).post('/password-validator').send({ password: 'short' });
  
        expect(response.status).toBe(400);
        expect(response.body.errors).not.toBeNull();
      });
    });

  });

  it('responds with 404 for unknown routes', async () => {
    const response = await request(app.callback()).get('/');
    
    expect(response.status).toBe(404);
  });
});