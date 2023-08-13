'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
	const pathname = usePathname();

	const routes = [
		{
			href: `/`,
			label: 'Home',
			active: pathname === `/`,
		},
		{
			href: `/services`,
			label: 'Services',
			active: pathname === `/services`,
		},
		{
			href: `/about-us`,
			label: 'About Us',
			active: pathname === `/about-us`,
		},
		{
			href: `/contact-us`,
			label: 'Contact Us',
			active: pathname === `/contact-us`,
		},
		{
			href: `/faqs`,
			label: 'FAQs',
			active: pathname === `/faqs`,
		},
	];
	return (
		<div className=''>
			<div className='flex items-center justify-between max-w-7xl mx-auto p-4'>
				<div>
					<Image
						src={'/assets/images/logo.png'}
						alt='Realty Logo'
						width={180}
						height={180}
					/>
				</div>
				<div className='flex items-center space-x-6 '>
					{routes.map((route) => {
						return (
							<Link
								key={route.href}
								href={route.href}
								className={cn(
									'hover:text-blue-500 text-[16px]',
									route.active ? 'font-bold text-primary-color' : ''
								)}
							>
								{route.label}
							</Link>
						);
					})}
				</div>
				<div className='flex items-center space-x-5'>
					<Button variant='outline' className='border-none px-5 font-semibold'>
						Log in
					</Button>
					<Button
						variant='default'
						className='bg-primary-color px-5 hover:bg-blue-900'
					>
						Sign Up
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
