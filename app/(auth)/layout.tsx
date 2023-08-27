import '../globals.css';

export default function AuthLayout({
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
