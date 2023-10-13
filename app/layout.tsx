import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import { ModalProvider } from '@/components/providers/modal-provider';
import { ToastProvider } from '@/components/providers/toast-provider';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
});

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Realty Central',
	description: 'Realty Central is a real estate management software',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`${poppins.variable} ${inter.variable}`}>
					<ModalProvider />
					<ToastProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
