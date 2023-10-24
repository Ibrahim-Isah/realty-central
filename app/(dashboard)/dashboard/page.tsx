import { fetchUser } from '@/actions/user';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { UserData } from '@/types';
import Dashboard from '@/components/dashboard/dashboard';
import { fetchDashboardCards } from '@/actions/dashboard';

export default async function Page() {
	const user = await currentUser();
	if (!user) return redirect('/sign-in');

	const userInfo: any = await fetchUser();
	const cards = await fetchDashboardCards();

	if (!userInfo || !userInfo.on_boarded) redirect('/onboarding');

	return <Dashboard user={userInfo as UserData} cardsCount={cards} />;
}
