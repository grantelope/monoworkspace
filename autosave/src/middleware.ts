import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/graphql')) {
        return NextResponse.rewrite(
            new URL('http://localhost:4000' ?? '', request.url)
        );
    }

    return NextResponse.next();
}
