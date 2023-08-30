'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
	LuBarChart,
	LuChevronDown,
	LuChevronUp,
	LuClock,
	LuFiles,
	LuHome,
	LuLayoutDashboard,
	LuUser,
	LuUsers,
} from 'react-icons/lu';
import { BsDot } from 'react-icons/bs';

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';

const DashboardContent = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const currentPath = pathname.split('/')[1];

	const routes = [
		{
			href: 'dashboard',
			text: 'Dashboard',
			icon: <LuLayoutDashboard />,
			children: [],
		},
		{
			href: 'documents',
			text: 'Documents',
			icon: <LuFiles />,
			children: [],
		},
		{
			href: 'customers',
			text: 'Customers',
			icon: <LuUsers />,
			children: [],
		},
		{
			text: 'Lease Management',
			icon: <LuHome />,
			children: [
				{
					href: 'rents',
					text: 'Rent Properties',
					children: [],
				},
				{
					href: 'sold',
					text: 'Sold Properties',
					children: [],
				},
			],
		},
		{
			href: 'appointments',
			text: 'Appointments',
			icon: <LuClock />,
			children: [],
		},
		{
			href: 'analytics',
			text: 'Analytics',
			icon: <LuBarChart />,
			children: [],
		},
		{
			href: 'profile',
			text: 'Profile',
			icon: <LuUser />,
			children: [],
		},
	];
	return (
		<div className='pt-5'>
			{routes.map((route) => (
				<div key={route.text} className='my-3'>
					{route.href ? (
						<Link href={`/${route.href}`}>
							<div
								className={`flex items-center text-lg  p-2 rounded-md  ${
									currentPath === route.href
										? 'text-white bg-primary-color'
										: 'text-[#333333] hover:bg-[#00336622]'
								}`}
							>
								{route.icon}
								<p className='pl-3 font-semibold '>{route.text}</p>
							</div>
						</Link>
					) : (
						<Collapsible open={isOpen} onOpenChange={setIsOpen}>
							<CollapsibleTrigger
								className={`flex items-center justify-between text-lg w-full p-2 rounded-md  ${
									currentPath === 'sold'
										? 'bg-[#00336622]'
										: currentPath === 'rents' && 'bg-[#00336622]'
								}  text-[#333333] hover:bg-[#00336622] }`}
							>
								<div className='flex flex-1 items-center'>
									{route.icon}
									<p className='pl-3 font-semibold '>{route.text}</p>
								</div>
								{isOpen ? <LuChevronUp /> : <LuChevronDown />}
							</CollapsibleTrigger>
							<CollapsibleContent>
								{route.children.map((innerRoute) => (
									<div key={innerRoute.text} className='ml-5 mt-2'>
										<Link href={`/${innerRoute.href}`}>
											<div
												className={`flex items-center text-base  p-2 rounded-md  ${
													currentPath === innerRoute.href
														? 'text-white bg-primary-color'
														: 'text-[#333333] hover:bg-[#00336622]'
												}`}
											>
												<BsDot />
												<p className='pl-3 font-semibold '>{innerRoute.text}</p>
											</div>
										</Link>
									</div>
								))}
							</CollapsibleContent>
						</Collapsible>
					)}
				</div>
			))}
		</div>
	);
};

export default DashboardContent;
