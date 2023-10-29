'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BarChart } from 'lucide-react';

const Analytics = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<BarChart />}
				title='Analytics'
				subtitle='All computed statistical data'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Analytics;
