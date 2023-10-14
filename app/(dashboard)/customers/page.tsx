import { fetchAllCustomers } from '@/actions/customer';
import { fetchUser } from '@/actions/user';
import Customers from '@/components/customer/customers';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Page = async () => {
	const user = await currentUser();
	if (!user) return redirect('/sign-in');

	const userInfo = await fetchUser();
	if (!userInfo || !userInfo.on_boarded) redirect('/onboarding');
	const customers = await fetchAllCustomers(userInfo?.id);

	return <Customers customers={customers} />;
};

export default Page;
