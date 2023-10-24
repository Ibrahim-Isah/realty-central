import { fetchUser } from '@/actions/user';
import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(
	req: Request,
	{ params }: { params: { customerId: string } }
) {
	try {
		const user = await fetchUser();
		if (!user?.id) {
			return new NextResponse('Unauthorized', {
				status: 401,
			});
		}

		const body = await req.json();

		if (!body.email) {
			return new NextResponse('Bad Request, Email is required', {
				status: 400,
			});
		}

		if (!params.customerId) {
			return new NextResponse('Bad Request, Customer ID is missing', {
				status: 400,
			});
		}

		const customer = await prismadb.customer.update({
			where: {
				id: body.id,
			},
			data: {
				...body,
			},
		});

		if (!customer) {
			return new NextResponse('Internal Error', {
				status: 500,
			});
		}

		return NextResponse.json(customer);
	} catch (error) {
		console.log('[CUSTOMER_PUT]', error);
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}
