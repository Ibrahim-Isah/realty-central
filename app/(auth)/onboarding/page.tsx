import React from 'react';
import AccountProfile from '../components/account-profile';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';

const Onboarding = async () => {
	const user = await currentUser();
	if (!user) return null;

	const userData = {
		firstName: '',
		lastName: '',
		companyName: '',
		email: '',
		phone: '',
		profileImage: '',
		address: '',
		city: '',
		state: '',
		zipCode: '',
		country: '',
		website: '',
		about: '',
		on_boarded: false,
		userId: user.id,
	};

	return (
		<div className='min-h-[70vh] w-full'>
			<div className='max-w-7xl flex flex-col sm:flex-row justify-between w-full mx-auto p-4'>
				<div className='w-full pb-7 pt-3 flex flex-col space-y-5'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-medium font-inter'>Onboarding</h1>
						<p className='font-poppins text-[#737373] text-sm font-light'>
							Complete your profile registration
						</p>
					</div>
				</div>
				<div className=''>
					<AccountProfile userData={userData} btnTitle='Continue' />
				</div>
			</div>
		</div>
	);
};

export default Onboarding;
