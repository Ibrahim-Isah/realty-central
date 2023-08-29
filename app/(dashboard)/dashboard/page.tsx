'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { usePathname } from 'next/navigation';
import {
	LuBanknote,
	LuClock,
	LuCreditCard,
	LuHome,
	LuLayoutDashboard,
	LuUsers,
} from 'react-icons/lu';
import BreadCrumb from './components/breadcrumb';
import Chart from './components/chart';
import { formatter } from '@/lib/utils';

const cards = [
	{ icon: <LuBanknote />, title: 'Revenue', value: formatter.format(100000) },
	{ icon: <LuUsers />, title: 'Customers', value: '200' },
	{ icon: <LuHome />, title: 'Properties', value: '25' },
	{ icon: <LuClock />, title: 'Appointments', value: '5' },
];

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
				{cards.map((card) => (
					<Card key={card.title}>
						<CardHeader className='font-medium  '>
							<div className='flex items-center text-lg '>
								<div className='text-xl'>{card.icon}</div>
								<h2 className='ml-3 font-inter'>{card.title}</h2>
							</div>
						</CardHeader>
						<CardContent>
							<div>
								<h1 className='text-3xl font-semibold'>{card.value}</h1>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5 md:mt-10'>
				<div className='col-span-3'>
					<Chart />
				</div>
				<div className='col-span-2'>
					<h1>Some other things here</h1>
				</div>
			</div>
		</main>
	);
}
