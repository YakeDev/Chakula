import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BearerAuthGuard } from './bearer-auth.guard';
import { TokenService } from './token.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, TokenService, BearerAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
