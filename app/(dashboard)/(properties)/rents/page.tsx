'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuHome } from 'react-icons/lu';

const Rent = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuHome />}
				title='Rented Properties'
				subtitle='All listing of rented properties'
				breadcrumb={`Lease management/${breadcrumb}`}
			/>
		</main>
	);
};

export default Rent;
