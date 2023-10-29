'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Clock } from 'lucide-react';

const Appointments = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<Clock />}
				title='Appointments'
				subtitle='All schedule appointments and details'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Appointments;
