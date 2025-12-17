import type { Request } from 'express';

import type { AuthPayload, AuthTokens, UserRole } from '@chakula/shared';

export interface RegisterInput {
  fullname: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface TokenPayload {
  sub: string;
  email: string;
  role: UserRole;
  exp: number;
}

export interface UserRecord {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  role: UserRole;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
}

export interface RequestWithUser extends Request {
  user: UserRecord;
  token: AuthTokens;
  tokenPayload: TokenPayload;
}

export interface AuthResult extends AuthPayload {}
