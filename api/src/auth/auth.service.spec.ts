import { BadRequestException, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';
import { TokenService } from './token.service';

const baseRegisterPayload = {
  fullname: 'Chakula Tester',
  email: 'tester@chakula.dev',
  phone: '+243811111111',
  password: 'supersafe',
  role: 'client' as const,
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService(new TokenService());
  });

  it('registers a new user and maps the profile', () => {
    const result = service.register(baseRegisterPayload);

    expect(result.user.email).toBe(baseRegisterPayload.email);
    expect(result.tokens.accessToken).toBeDefined();
  });

  it('prevents duplicate email registration', () => {
    service.register(baseRegisterPayload);

    expect(() => service.register({ ...baseRegisterPayload, phone: '+243822222222' })).toThrow(BadRequestException);
  });

  it('authenticates an existing user', () => {
    service.register(baseRegisterPayload);

    const result = service.login({ email: baseRegisterPayload.email, password: baseRegisterPayload.password });
    expect(result.user.fullname).toBe('Chakula Tester');
  });

  it('rejects an invalid password', () => {
    service.register(baseRegisterPayload);

    expect(() => service.login({ email: baseRegisterPayload.email, password: 'wrong' })).toThrow(UnauthorizedException);
  });

  it('verifies tokens and resolves the user', () => {
    const { tokens, user } = service.register(baseRegisterPayload);

    const resolved = service.resolveToken(tokens.accessToken);
    expect(resolved?.user.id).toBe(user.id);
  });
});
