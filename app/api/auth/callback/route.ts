import { handleGoogleCallback } from '@/lib/google';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = Object.fromEntries(request.nextUrl.searchParams);

  try {
    const { accessToken, refreshToken, expiresIn } = await handleGoogleCallback(
      searchParams
    );

    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);
    console.log('Expires In:', expiresIn);

    // Store tokens securely (cookie, database, etc.)
    const response = NextResponse.redirect(new URL('/dashboard', request.url));
    response.cookies.set('accessToken', accessToken, { httpOnly: true });
    if (refreshToken) {
      response.cookies.set('refreshToken', refreshToken, { httpOnly: true });
    }

    return response;
  } catch (error) {
    return NextResponse.redirect(
      new URL(
        `/signin?error=${encodeURIComponent(
          error instanceof Error ? error.message : 'Auth failed'
        )}`,
        request.url
      )
    );
  }
}
