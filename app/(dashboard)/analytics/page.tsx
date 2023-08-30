'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuBarChart } from 'react-icons/lu';

const Analytics = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuBarChart />}
				title='Analytics'
				subtitle='All computed statistical data'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Analytics;
