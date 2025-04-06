'use client';

interface ApiErrorResponse {
  code: string;
  message: string;
}
export interface ApiResponseInterface<T> {
  data: T | null;
  error: ApiErrorResponse | null;
  code: number;
}

export interface ApiTokenResponseInterface {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
}
