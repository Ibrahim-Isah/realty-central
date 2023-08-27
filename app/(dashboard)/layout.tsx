import '../globals.css';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
}
