'use client';

import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
// import { LuBoxes } from 'react-icons/lu';
import { Boxes } from 'lucide-react';

const Expenses = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<Boxes size={20} />}
				title='Expenses'
				subtitle='Create and track all expenses'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Expenses;
