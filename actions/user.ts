import prismadb from '@/lib/prismadb';
import { currentUser } from '@clerk/nextjs';

export const fetchUser = async () => {
	try {
		const loggedInUser = await currentUser();
		if (!loggedInUser) {
			return null;
		}
		const user = await prismadb.user.findUnique({
			where: {
				userId: loggedInUser.id || '',
			},
		});

		return user;
	} catch (error) {
		console.log('[USER_FETCH]', error);
		return null;
	}
};
