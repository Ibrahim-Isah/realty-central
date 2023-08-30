'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuUser } from 'react-icons/lu';

const Profile = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuUser />}
				title='Profile'
				subtitle='Edit your profile'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Profile;
