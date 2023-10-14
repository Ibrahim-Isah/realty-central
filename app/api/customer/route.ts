import { fetchUser } from '@/actions/user';
import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const user = await fetchUser();
		const body = await req.json();

		if (!user?.id) {
			return new NextResponse('Unauthorized', {
				status: 401,
			});
		}

		if (!body.email) {
			return new NextResponse('Bad Request, Email is required', {
				status: 400,
			});
		}

		const customer = await prismadb.customer.create({
			data: {
				...body,
				userId: user.id,
			},
		});

		if (!customer) {
			return new NextResponse('Internal Error', {
				status: 500,
			});
		}
		return NextResponse.json(customer);
	} catch (error) {
		console.log('[CUSTOMER_POST]', error);
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}

export async function GET(req: Request) {
	try {
		const user = await fetchUser();
		if (!user?.id) {
			return new NextResponse('Unauthorized', {
				status: 401,
			});
		}

		const customers = await prismadb.customer.findMany({
			where: {
				userId: user.id,
			},
		});

		if (!customers) {
			return new NextResponse('Internal Error', {
				status: 500,
			});
		}

		return NextResponse.json(customers);
	} catch (error) {
		console.log('[CUSTOMER_GET]', error);
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}
