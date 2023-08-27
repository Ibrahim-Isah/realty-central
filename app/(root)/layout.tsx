import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
