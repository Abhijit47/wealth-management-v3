'use server';

import { redirect } from 'next/navigation';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

type GoogleTokenResponse = {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
  scope: string;
};

type TokenResult = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
};

/**
 * 1. Generate Google OAuth URL for sign-in button
 * Use this URL as href for your sign-in button
 */
export async function getGoogleAuthUrl(): Promise<string> {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID || '',
    redirect_uri: REDIRECT_URI || '',
    response_type: 'code',
    // scope:
    //   'openid profile email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/business.manage',
    scope: 'https://www.googleapis.com/auth/business.manage',
    access_type: 'offline', // Force refresh token
    prompt: 'consent', // Always show consent screen
  });

  return redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  );
}

/**
 * 2. Handle OAuth callback - Extract code from URL
 * Call this in your callback route after user returns from Google
 */
export async function handleGoogleCallback(
  searchParams: Record<string, string | string[] | undefined>
): Promise<TokenResult> {
  const code = searchParams.code as string;
  const error = searchParams.error as string;

  if (error) {
    throw new Error(`Google OAuth error: ${error}`);
  }

  if (!code) {
    throw new Error('No authorization code received from Google');
  }

  // Exchange code for tokens
  const tokens = await exchangeCodeForTokens(code);
  return tokens;
}

/**
 * 3. Exchange authorization code for access & refresh tokens
 * Server-side token exchange with Google
 */
export async function exchangeCodeForTokens(
  code: string
): Promise<TokenResult> {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !REDIRECT_URI) {
    throw new Error('Missing Google OAuth environment variables');
  }

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URI,
  });

  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Token exchange failed: ${error}`);
    }

    const data: GoogleTokenResponse = await response.json();

    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    };
  } catch (error) {
    throw new Error(
      `Failed to exchange code for tokens: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    );
  }
}
