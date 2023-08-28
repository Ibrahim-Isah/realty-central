'use client';

import Link from 'next/link';
import {
	LuArrowDown,
	LuArrowDown01,
	LuArrowDown10,
	LuBarChart,
	LuChevronDown,
	LuClock,
	LuFiles,
	LuHome,
	LuLayoutDashboard,
	LuUser,
	LuUsers,
} from 'react-icons/lu';
import { usePathname } from 'next/navigation';

const DashboardContent = () => {
	const pathname = usePathname();

	const currentPath = pathname.split('/')[1];

	const routes = [
		{
			href: 'dashboard',
			text: 'Dashboard',
			icon: <LuLayoutDashboard className='font-bold' />,
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
		<div className='pt-7'>
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
						<div
							className={`flex items-center justify-between text-lg  p-2 rounded-md  ${
								currentPath === route.href
									? 'text-white bg-primary-color'
									: 'text-[#333333] hover:bg-[#00336622]'
							}`}
						>
							<div className='flex items-center'>
								{route.icon}
								<p className='pl-3 font-semibold '>{route.text}</p>
							</div>
							<LuChevronDown />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default DashboardContent;
