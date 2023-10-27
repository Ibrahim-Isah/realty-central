import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuBoxes } from 'react-icons/lu';

const Expenses = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuBoxes />}
				title='Expenses'
				subtitle='Create and track all expenses'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Expenses;
