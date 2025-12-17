import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health', () => {
    it('should expose health metadata', () => {
      expect(appController.getHealth()).toEqual({
        success: true,
        data: {
          service: 'chakula-api',
          version: '0.2.0',
          status: 'ok',
        },
      });
    });
  });
});
