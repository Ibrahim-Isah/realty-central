'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import {
	BarChart,
	Boxes,
	ChevronDown,
	ChevronUp,
	Clock,
	Files,
	Home,
	LayoutDashboard,
	User,
	Users,
} from 'lucide-react';

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';

const DashboardContent = ({
	setSidebarOpen,
}: {
	setSidebarOpen: (open: boolean) => void;
}) => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const currentPath = pathname.split('/')[1];

	const routes = [
		{
			href: 'dashboard',
			text: 'Dashboard',
			icon: <LayoutDashboard />,
			children: [],
		},
		{
			href: 'documents',
			text: 'Documents',
			icon: <Files />,
			children: [],
		},
		{
			href: 'customers',
			text: 'Customers',
			icon: <Users />,
			children: [],
		},
		{
			text: 'Lease Management',
			icon: <Home />,
			children: [
				{
					href: 'available',
					text: 'Available Properties',
					children: [],
				},
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
			icon: <Clock />,
			children: [],
		},
		{
			href: 'expenses',
			text: 'Expenses',
			icon: <Boxes />,
			children: [],
		},
		{
			href: 'analytics',
			text: 'Analytics',
			icon: <BarChart />,
			children: [],
		},
		{
			href: 'profile',
			text: 'Profile',
			icon: <User />,
			children: [],
		},
	];
	return (
		<div className='pt-5'>
			{routes.map((route) => (
				<div key={route.text} className='my-3'>
					{route.href ? (
						<Link href={`/${route.href}`} onClick={() => setSidebarOpen(false)}>
							<div
								className={`flex items-center text-base  p-2 rounded-md  ${
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
								className={`flex items-center justify-between text-base w-full p-2 rounded-md  ${
									currentPath === 'sold'
										? 'bg-[#00336622]'
										: currentPath === 'rents' && 'bg-[#00336622]'
								}  text-[#333333] hover:bg-[#00336622] }`}
							>
								<div className='flex flex-1 items-center'>
									{route.icon}
									<p className='pl-3 font-semibold '>{route.text}</p>
								</div>
								{isOpen ? <ChevronUp /> : <ChevronDown />}
							</CollapsibleTrigger>
							<CollapsibleContent>
								{route.children.map((innerRoute) => (
									<div key={innerRoute.text} className='ml-5 mt-2'>
										<Link
											href={`/${innerRoute.href}`}
											onClick={() => setSidebarOpen(false)}
										>
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
