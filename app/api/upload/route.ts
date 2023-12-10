import { NextResponse } from 'next/server';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { auth } from '@clerk/nextjs';

export async function POST(req: Request) {
	try {
		const { userId } = auth();
	} catch (error: any) {
		console.log('[UPLOAD_POST]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
