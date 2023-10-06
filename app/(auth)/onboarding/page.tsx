import React from 'react';
import AccountProfile from '../components/account-profile';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchUser } from '@/actions/user';

const Onboarding = async () => {
	const user = await currentUser();
	if (!user) return redirect('/sign-up');

	const userInfo = await fetchUser();
	if (userInfo && userInfo.on_boarded) redirect('/dashboard');

	const userData = {
		firstName: user.firstName || '',
		lastName: user.lastName || '',
		companyName: '',
		email: user.emailAddresses[0].emailAddress || '',
		phone: '',
		profileImage: user.imageUrl || '',
		address: '',
		city: '',
		state: '',
		zipCode: '',
		country: '',
		website: '',
		about: '',
		on_boarded: true,
		userId: user.id,
	};

	return (
		<div className='min-h-[70vh] w-full'>
			<div className='max-w-7xl flex flex-row justify-between w-full mx-auto px-4 pt-10 sm:px-4'>
				<div className='w-full pb-7 pt-3 flex flex-col space-y-5'>
					<div className='space-y-2'>
						<h1 className='text-xl sm:text-3xl font-medium font-inter'>
							Onboarding
						</h1>
						<p className='font-poppins text-[#737373] text-sm font-light'>
							Complete your profile registration
						</p>
					</div>
				</div>
				<div className='mt-5 sm:mt-1'>
					<UserButton />
				</div>
			</div>
			<div className=''>
				<AccountProfile userData={userData} btnTitle='Continue' />
			</div>
		</div>
	);
};

export default Onboarding;
