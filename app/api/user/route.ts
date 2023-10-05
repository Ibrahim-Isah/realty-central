import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { userId } = auth();

		const body = await req.json();

		const {
			firstName,
			lastName,
			email,
			companyName,
			profileImage,
			address,
			city,
			state,
			zipCode,
			country,
			website,
			about,
			on_boarded,
		} = body;

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

		const user = prismadb.user.create({
			data: {
				firstName,
				lastName,
				email,
				on_boarded,
				companyName,
				profileImage,
				address,
				city,
				state,
				zipCode,
				country,
				website,
				userId,
				about,
			},
		});

		return NextResponse.json(user);
	} catch (error) {
		console.log('[USER_POST]', error);
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}
