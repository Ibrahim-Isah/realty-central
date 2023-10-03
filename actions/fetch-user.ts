import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export const fetchUser = async () => {
	try {
		const { userId } = auth();
		const user = await prismadb.user.findUnique({
			where: {
				userId: userId || '',
			},
		});
		return user;
	} catch (error) {
		console.log('[USER_FETCH]', error);
		return null;
	}
};
