import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import type { ApiResponse, AuthPayload } from '@chakula/shared';

import { AuthService } from './auth.service';
import type { LoginInput, RegisterInput, RequestWithUser } from './auth.types';
import { BearerAuthGuard } from './bearer-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterInput): ApiResponse<AuthPayload> {
    const payload = this.authService.register(body);
    return { success: true, data: payload };
  }

  @Post('login')
  login(@Body() body: LoginInput): ApiResponse<AuthPayload> {
    const payload = this.authService.login(body);
    return { success: true, data: payload };
  }

  @Get('me')
  @UseGuards(BearerAuthGuard)
  me(@Req() request: RequestWithUser): ApiResponse<{ profile: ReturnType<AuthService['toProfile']> }> {
    const profile = this.authService.toProfile(request.user);
    return { success: true, data: { profile } };
  }
}
