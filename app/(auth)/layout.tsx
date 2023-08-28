import '../globals.css';
import AuthFooter from './components/auth-footer';
import AuthHeader from './components/auth-header';

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex flex-col min-h-screen'>
			<AuthHeader />
			<main className='flex flex-col justify-center items-center flex-1 my-7'>
				{children}
			</main>
			<AuthFooter />
		</div>
	);
}
