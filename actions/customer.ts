import prismadb from '@/lib/prismadb';

export const fetchAllCustomers = async (userId: string) => {
	try {
		if (!userId) {
			return null;
		}
		const customers = await prismadb.customer.findMany({
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
