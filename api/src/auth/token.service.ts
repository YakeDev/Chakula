import crypto from 'crypto';

import { Injectable } from '@nestjs/common';

import type { AuthTokens } from '@chakula/shared';

import type { TokenPayload } from './auth.types';

function base64UrlEncode(input: string | Buffer): string {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64UrlDecode(input: string): Buffer {
  const padded = input.padEnd(input.length + ((4 - (input.length % 4)) % 4), '=');
  const normalized = padded.replace(/-/g, '+').replace(/_/g, '/');
  return Buffer.from(normalized, 'base64');
}

@Injectable()
export class TokenService {
  private readonly secret = process.env.JWT_SECRET ?? 'dev-chakula-secret';
  private readonly expirationSeconds = 60 * 60; // 1 hour

  sign(payload: Omit<TokenPayload, 'exp'>): AuthTokens {
    const exp = Math.floor(Date.now() / 1000) + this.expirationSeconds;
    const tokenPayload: TokenPayload = { ...payload, exp };
    const header = { alg: 'HS256', typ: 'JWT' };

    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedPayload = base64UrlEncode(JSON.stringify(tokenPayload));
    const signature = this.createSignature(`${encodedHeader}.${encodedPayload}`);
    const accessToken = `${encodedHeader}.${encodedPayload}.${signature}`;

    return { accessToken, expiresInSeconds: this.expirationSeconds };
  }

  verify(token: string): TokenPayload | null {
    const [encodedHeader, encodedPayload, receivedSignature] = token.split('.');
    if (!encodedHeader || !encodedPayload || !receivedSignature) {
      return null;
    }

    const expectedSignature = this.createSignature(`${encodedHeader}.${encodedPayload}`);
    const expectedBuffer = Buffer.from(expectedSignature);
    const receivedBuffer = Buffer.from(receivedSignature);

    if (expectedBuffer.length !== receivedBuffer.length) {
      return null;
    }

    if (!crypto.timingSafeEqual(expectedBuffer, receivedBuffer)) {
      return null;
    }

    try {
      const payload = JSON.parse(base64UrlDecode(encodedPayload).toString('utf8')) as TokenPayload;
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        return null;
      }
      return payload;
    } catch (error) {
      return null;
    }
  }

  private createSignature(data: string): string {
    const hmac = crypto.createHmac('sha256', this.secret);
    hmac.update(data);
    return base64UrlEncode(hmac.digest());
  }
}
