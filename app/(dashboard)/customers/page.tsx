import { fetchUser } from '@/actions/user';
import Customers from '@/components/customer/customers';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Page = async () => {
	const user = await currentUser();
	if (!user) return redirect('/sign-in');

	const userInfo = await fetchUser();
	if (!userInfo || !userInfo.on_boarded) redirect('/onboarding');

	return <Customers />;
};

export default Page;
