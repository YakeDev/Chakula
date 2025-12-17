import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('/api/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/health')
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          success: true,
          data: {
            service: 'chakula-api',
            version: '0.2.0',
            status: 'ok',
          },
        });
      });
  });

  it('/api/auth/register then /api/auth/login', async () => {
    const server = app.getHttpServer();

    const registerResponse = await request(server)
      .post('/api/auth/register')
      .send({
        fullname: 'Test User',
        email: 'test@chakula.dev',
        phone: '+243000000000',
        password: 'strong-password',
        role: 'client',
      })
      .expect(201);

    expect(registerResponse.body.success).toBe(true);
    expect(registerResponse.body.data.user.email).toBe('test@chakula.dev');
    expect(registerResponse.body.data.tokens.accessToken).toBeDefined();

    const loginResponse = await request(server)
      .post('/api/auth/login')
      .send({
        email: 'test@chakula.dev',
        password: 'strong-password',
      })
      .expect(201);

    expect(loginResponse.body.data.user.fullname).toBe('Test User');
    expect(loginResponse.body.data.tokens.accessToken).toBeDefined();
  });
});
