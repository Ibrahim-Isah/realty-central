'use client';

import DashboardTopbar from '@/components/dashboard/dashboard-topbar';
import '../globals.css';
import DashboardSidebar from '@/components/dashboard/dashboard-sidebar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<main className='flex flex-auto lg:pl-[300px] pt-16 max-w-full xl:max-w-[100rem] xl:mx-auto'>
				<div className='flex flex-col flex-auto w-full min-h-full mx-3 lg:mx-5'>
					{children}
				</div>
			</main>
			<DashboardTopbar />
			<DashboardSidebar />
		</>
	);
}
