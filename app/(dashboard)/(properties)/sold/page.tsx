'use client';

import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Home } from 'lucide-react';

const Sold = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<Home />}
				title='Sold Properties'
				subtitle='All listing of sold properties'
				breadcrumb={`Lease management/${breadcrumb}`}
			/>
		</main>
	);
};

export default Sold;
