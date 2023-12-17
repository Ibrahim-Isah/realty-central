import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		const documents = await prismadb.document.findMany({
			where: {
				userId,
			},
		});

		return NextResponse.json(documents);
	} catch (error) {
		console.log('[DOCUMENT_GET]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
