import type { ApiResponse } from '@chakula/shared';
import { Injectable } from '@nestjs/common';

type HealthPayload = {
  service: string;
  version: string;
  status: 'ok';
};

@Injectable()
export class AppService {
  getHealth(): ApiResponse<HealthPayload> {
    return {
      success: true,
      data: {
        service: 'chakula-api',
        version: '0.1.0',
        status: 'ok',
      },
    };
  }
}
