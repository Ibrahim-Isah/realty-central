'use client';

import BreadCrumb from '@/components/shared/breadcrumb';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatter } from '@/lib/utils';
import { UserData } from '@/types';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
	LuBanknote,
	LuClock,
	LuHome,
	LuLayoutDashboard,
	LuUsers,
} from 'react-icons/lu';
import Appointments from './appointments';
import Chart from './chart';

const cards = [
	{ icon: <LuBanknote />, title: 'Revenue', value: formatter.format(100000) },
	{ icon: <LuUsers />, title: 'Customers', value: '200' },
	{ icon: <LuHome />, title: 'Properties', value: '25' },
	{ icon: <LuClock />, title: 'Appointments', value: '5' },
];

type DashboardProps = {
	user: UserData;
};
const Dashboard: React.FC<DashboardProps> = ({ user }) => {
	const pathname = usePathname();

	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuLayoutDashboard />}
				title={`Welcome, ${user?.firstName + ' ' + user?.lastName}`}
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
			<div className='grid grid-cols-1 lg:grid-cols-5 space-y-5 md:space-y-0 md:gap-5 mt-5 md:mt-10 mb-5'>
				<div className='col-span-3 h-full'>
					<Chart />
				</div>
				<div className='col-span-2 h-full'>
					<Appointments />
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
