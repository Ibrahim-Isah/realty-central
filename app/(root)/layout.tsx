import Footer from '@/app/(root)/components/footer';
import Header from '@/app/(root)/components/header';
import '../globals.css';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Header />
			<main className='flex-1 font-poppins mt-10 md:mt-auto'>{children}</main>
			<Footer />
		</div>
	);
}
