import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { userId } = auth();

		const body = await req.json();

		const { firstName, email } = body;

		if (!userId) {
			return new NextResponse('Unauthorized', {
				status: 401,
			});
		}

		if (!firstName || !email) {
			return new NextResponse('Bad Request, First Name and Email is required', {
				status: 400,
			});
		}

		const user = await prismadb.user.create({
			data: {
				...body,
			},
		});

		if (!user) {
			return new NextResponse('Internal Error', {
				status: 500,
			});
		}

		return NextResponse.json(user);
	} catch (error) {
		console.log('[USER_POST]', error);
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}
