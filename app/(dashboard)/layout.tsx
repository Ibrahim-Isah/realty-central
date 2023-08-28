import '../globals.css';
import DashboardSidebar from './dashboard/components/dashboard-sidebar';
import DashboardTopbar from './dashboard/components/dashboard-topbar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<DashboardTopbar />
			<DashboardSidebar />
			<main>{children}</main>
		</div>
	);
}
