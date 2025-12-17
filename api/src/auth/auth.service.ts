import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'crypto';

import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

import type { AuthPayload, UserProfile } from '@chakula/shared';

import { TokenService } from './token.service';
import type { AuthResult, LoginInput, RegisterInput, TokenPayload, UserRecord } from './auth.types';

@Injectable()
export class AuthService {
  private readonly users: UserRecord[] = [];

  constructor(private readonly tokenService: TokenService) {}

  register(input: RegisterInput): AuthResult {
    this.ensureValidRegisterInput(input);

    const email = input.email.toLowerCase();
    const phone = input.phone.trim();

    if (this.users.some((user) => user.email === email)) {
      throw new BadRequestException('Un compte existe déjà avec cet email.');
    }

    if (this.users.some((user) => user.phone === phone)) {
      throw new BadRequestException('Un compte existe déjà avec ce numéro.');
    }

    const now = new Date().toISOString();
    const user: UserRecord = {
      id: randomUUID(),
      fullname: input.fullname.trim(),
      email,
      phone,
      role: input.role,
      passwordHash: this.hashPassword(input.password),
      createdAt: now,
      updatedAt: now,
    };

    this.users.push(user);
    return this.createAuthPayload(user);
  }

  login(input: LoginInput): AuthResult {
    const email = input.email.toLowerCase();
    const user = this.users.find((candidate) => candidate.email === email);
    if (!user) {
      throw new UnauthorizedException("Identifiants incorrects");
    }

    const passwordValid = this.verifyPassword(input.password, user.passwordHash);
    if (!passwordValid) {
      throw new UnauthorizedException("Identifiants incorrects");
    }

    return this.createAuthPayload(user);
  }

  findById(id: string): UserRecord | undefined {
    return this.users.find((user) => user.id === id);
  }

  toProfile(user: UserRecord): UserProfile {
    return {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  resolveToken(token: string): { user: UserRecord; payload: TokenPayload } | null {
    const payload = this.tokenService.verify(token);
    if (!payload) {
      return null;
    }

    const user = this.findById(payload.sub);
    if (!user) {
      return null;
    }

    return { user, payload };
  }

  private createAuthPayload(user: UserRecord): AuthPayload {
    const tokens = this.tokenService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      user: this.toProfile(user),
      tokens,
    };
  }

  private ensureValidRegisterInput(input: RegisterInput): void {
    const required = [
      ['fullname', input.fullname],
      ['email', input.email],
      ['phone', input.phone],
      ['password', input.password],
      ['role', input.role],
    ];

    const missing = required.find(([, value]) => !value || `${value}`.trim().length === 0);
    if (missing) {
      throw new BadRequestException(`Le champ ${missing[0]} est requis.`);
    }
  }

  private hashPassword(password: string): string {
    const salt = randomBytes(16).toString('hex');
    const hashed = scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${hashed}`;
  }

  private verifyPassword(password: string, stored: string): boolean {
    const [salt, hashed] = stored.split(':');
    if (!salt || !hashed) {
      return false;
    }

    const inputHash = scryptSync(password, salt, 64).toString('hex');
    return timingSafeEqual(Buffer.from(hashed, 'hex'), Buffer.from(inputHash, 'hex'));
  }
}
