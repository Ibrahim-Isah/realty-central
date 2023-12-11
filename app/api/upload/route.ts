import { NextResponse } from 'next/server';
import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { auth } from '@clerk/nextjs';

export async function POST(req: Request) {
	try {
		const { userId } = auth();

		const { filename, contentType } = await req.json();

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		if (!filename || !contentType) {
			return new NextResponse(
				'Bad Request, filename and contentType is required',
				{ status: 400 }
			);
		}

		const client = new S3Client({
			region: process.env.AWS_REGION!,
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
			},
		});

		const { url, fields } = await createPresignedPost(client, {
			Bucket: process.env.AWS_BUCKET_NAME!,
			Key: filename,
			Conditions: [
				['content-length-range', 0, 10485760], // up to 10 MB
				['starts-with', '$Content-Type', contentType],
			],
			Fields: {
				acl: 'public',
				'Content-Type': contentType,
			},
		});

		return NextResponse.json({
			url,
			fields,
			userId,
		});
	} catch (error: any) {
		console.log('[UPLOAD_POST]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}

export async function DELETE(req: Request) {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		const { filename } = await req.json();

		if (!filename) {
			return new NextResponse('Bad Request, filename is required', {
				status: 400,
			});
		}

		await new S3Client({
			region: process.env.AWS_REGION!,
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
			},
		}).send(
			new DeleteObjectCommand({
				Bucket: process.env.AWS_BUCKET_NAME!,
				Key: filename,
			})
		);

		return NextResponse.json({ success: true });
	} catch (error: any) {
		console.log('[UPLOAD_DELETE]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
