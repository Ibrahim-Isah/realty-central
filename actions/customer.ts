import prismadb from '@/lib/prismadb';
import { Customer } from '@prisma/client';

export const fetchAllCustomers = async (userId: string) => {
	try {
		if (!userId) {
			return null;
		}
		const customers: Customer[] = await prismadb.customer.findMany({
			where: {
				userId: userId || '',
			},
		});

		return customers;
	} catch (error) {
		console.log(error);
		return null;
	}
};
