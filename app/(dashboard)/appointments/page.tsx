'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuClock } from 'react-icons/lu';

const Appointments = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuClock />}
				title='Appointments'
				subtitle='All schedule appointments and details'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Appointments;
