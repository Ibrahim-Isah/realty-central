'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
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
				<div className='hidden lg:flex items-center space-x-6 '>
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
				<div className='hidden lg:flex items-center space-x-5'>
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
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='outline'
							className='flex lg:hidden hover:bg-[#00336611] p-[9px] rounded-full border-none'
						>
							<LuMenu size='1.5rem' />
						</Button>
					</SheetTrigger>
					<SheetContent className='flex flex-col'>
						<SheetHeader>
							<SheetTitle>
								<Image
									src={'/assets/images/logo.png'}
									alt='Realty Logo'
									width={180}
									height={180}
								/>
							</SheetTitle>
						</SheetHeader>
						<div className='flex flex-col flex-1 mb-auto items-start space-y-5 mt-10'>
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

						<SheetFooter className=''>
							<SheetClose asChild>
								<div className='space-x-5'>
									<Button
										variant='outline'
										className='border-none px-5 font-semibold'
									>
										Log in
									</Button>
									<Button
										variant='default'
										className='bg-primary-color px-5 hover:bg-blue-900'
									>
										Sign Up
									</Button>
								</div>
							</SheetClose>
							<Image
								src='/assets/images/gif.gif'
								alt='Rocket People'
								className='mt-3'
								width={500}
								height={500}
							/>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default Header;
