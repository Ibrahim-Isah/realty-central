'use client';

import '../globals.css';
import DashboardSidebar from './dashboard/components/dashboard-sidebar';
import DashboardTopbar from './dashboard/components/dashboard-topbar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<main className='flex flex-auto lg:pl-[300px] pt-16 max-w-full'>
				<div className='flex flex-col flex-auto w-full min-h-full mx-2'>
					{children}
				</div>
			</main>
			<DashboardTopbar />
			<DashboardSidebar />
		</>
	);
}
