import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';
import type { RequestWithUser } from './auth.types';

@Injectable()
export class BearerAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const header = request.headers['authorization'];

    if (!header || Array.isArray(header)) {
      throw new UnauthorizedException('Jeton manquant');
    }

    const [scheme, rawToken] = header.split(' ');
    if (!rawToken || scheme.toLowerCase() !== 'bearer') {
      throw new UnauthorizedException('Jeton manquant');
    }

    const token = rawToken.trim();
    const result = this.authService.resolveToken(token);
    if (!result) {
      throw new UnauthorizedException('Jeton invalide ou expiré');
    }

    request.user = result.user;
    request.tokenPayload = result.payload;
    return true;
  }
}
