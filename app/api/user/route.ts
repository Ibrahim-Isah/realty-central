import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse('Unauthorized', {
				status: 401,
			});
		}

		const user = await prismadb.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!user) {
			return new NextResponse('Internal Error', {
				status: 500,
			});
		}

		return NextResponse.json(user);
	} catch (error) {
		console.log('[USER_GET]', error);
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}

export async function POST(req: Request) {
	try {
		const { userId } = auth();

		const body = await req.json();

		if (body.id) {
			delete body.id;
		}

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

export const PATCH = async (req: Request) => {
	try {
		const { userId } = auth();
		const body = await req.json();

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		if (!body.id) {
			return new NextResponse('Bad Request, ID is missing', { status: 400 });
		}

		const user = await prismadb.user.update({
			where: {
				id: body.id,
			},
			data: {
				...body,
			},
		});

		if (!user) {
			return new NextResponse('Internal Error', { status: 500 });
		}

		return NextResponse.json(user);
	} catch (error) {
		console.log('[USER_PATCH]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
};
