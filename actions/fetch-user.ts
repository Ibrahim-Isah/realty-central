import prismadb from '@/lib/prismadb';
import { auth, currentUser } from '@clerk/nextjs';

export const fetchUser = async () => {
	try {
		const loggedInUser = await currentUser();
		if (!loggedInUser) {
			return null;
		}
		const user = await prismadb.user.findUnique({
			where: {
				email: loggedInUser.emailAddresses[0].emailAddress || '',
			},
		});

		const users = await prismadb.user.findMany({
			where: {
				on_boarded: true,
			},
		});

		console.log('the users', users);
		return user;
	} catch (error) {
		console.log('[USER_FETCH]', error);
		return null;
	}
};
