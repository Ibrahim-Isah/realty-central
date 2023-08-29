'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { usePathname } from 'next/navigation';
import { LuCreditCard, LuLayoutDashboard } from 'react-icons/lu';
import BreadCrumb from './components/breadcrumb';

export default function Dashboard() {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);

	return (
		<main className=''>
			<BreadCrumb
				icon={<LuLayoutDashboard />}
				title='Welcome, Isah Abba Ibrahim'
				subtitle='Overview of Your Dashboard'
				breadcrumb={breadcrumb}
			/>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
				{[1, 2, 3, 4].map((number) => (
					<Card key={number}>
						<CardHeader className='font-medium  '>
							<div className='flex items-center text-lg'>
								<LuCreditCard />
								<h2 className='ml-1 font-inter'>Profit</h2>
							</div>
						</CardHeader>
						<CardContent>
							<div>
								<h1 className='text-3xl font-semibold'>$10, 000</h1>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</main>
	);
}
