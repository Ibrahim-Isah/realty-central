'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuUsers } from 'react-icons/lu';

const Customers = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuUsers />}
				title='Customers'
				subtitle='Registered Customers'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Customers;
