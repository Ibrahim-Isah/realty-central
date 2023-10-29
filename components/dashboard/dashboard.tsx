'use client';

import BreadCrumb from '@/components/shared/breadcrumb';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatter } from '@/lib/utils';
import { UserData } from '@/types';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Banknote, Clock, Home, LayoutDashboard, Users } from 'lucide-react';
import Appointments from './appointments';
import Chart from './chart';

type DashboardProps = {
	user: UserData;
	cardsCount: any;
};
const Dashboard: React.FC<DashboardProps> = ({ user, cardsCount }) => {
	const pathname = usePathname();

	const breadcrumb = pathname.slice(1);

	const cards = [
		{ icon: <Banknote />, title: 'Revenue', value: formatter.format(100000) },
		{
			icon: <Users />,
			title: 'Customers',
			value: cardsCount.customersCount || 0,
		},
		{ icon: <Home />, title: 'Properties', value: '25' },
		{ icon: <Clock />, title: 'Appointments', value: '5' },
	];
	return (
		<main className=''>
			<BreadCrumb
				icon={<LayoutDashboard />}
				title={`Welcome, ${user?.firstName + ' ' + user?.lastName}`}
				subtitle='Overview of Your Dashboard'
				breadcrumb={breadcrumb}
			/>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
				{cards.map((card) => (
					<Card key={card.title}>
						<CardHeader className='font-regular  '>
							<div className='flex items-center  justify-between flex-row-reverse text-base text-primary-color'>
								<div className='text-xl '>{card.icon}</div>
								<h2 className=' font-inter'>{card.title}</h2>
							</div>
						</CardHeader>
						<CardContent>
							<div>
								<h1 className='text-xl font-semibold'>{card.value}</h1>
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
