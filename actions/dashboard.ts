import prismadb from '@/lib/prismadb';
import { fetchUser } from './user';

export async function fetchDashboardCards() {
	const user = await fetchUser();
	try {
		if (!user) return null;

		const customersCount = await prismadb.customer.count({
			where: {
				userId: user.id,
			},
		});

		return {
			customersCount,
		};
	} catch (error) {
		console.log('[DASHBOARD]', error);
	}
}
