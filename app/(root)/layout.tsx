import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Realty Central',
	description: 'Realty Central is a real estate management software',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} flex flex-col`}>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
