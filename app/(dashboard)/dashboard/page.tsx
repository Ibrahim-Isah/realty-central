import { fetchUser } from '@/actions/user';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Dashboard from './components/dashboard';
import { UserData } from '@/types';

export default async function Page() {
	const user = await currentUser();
	if (!user) return redirect('/sign-up');

	const userInfo = await fetchUser();
	if (!userInfo || !userInfo.on_boarded) redirect('/onboarding');

	return <Dashboard user={userInfo as UserData} />;
}
