'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Header = () => {
	const pathname = usePathname();
	const router = useRouter();

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
		<div className='fixed top-0 mb-16 md:mb-10 w-full shadow-sm bg-white z-50'>
			<div className='flex items-center justify-between max-w-7xl mx-auto p-4'>
				<Link href='/'>
					<Image
						src={'/assets/images/logo.png'}
						alt='Realty Logo'
						width={180}
						height={180}
					/>
				</Link>
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
					<Button
						variant='outline'
						onClick={() => router.push('/sign-in')}
						className='border-none shadow-md shadow-gray-300 px-5 font-semibold'
					>
						Log in
					</Button>
					<Button
						variant='default'
						className='bg-primary-color px-5 hover:bg-blue-900'
						onClick={() => router.push('/sign-up')}
					>
						Sign Up
					</Button>
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							aria-label='Menu Icon'
							variant='outline'
							className='flex lg:hidden hover:bg-[#00336611] p-[9px] rounded-full border-none'
						>
							<Menu size='1.5rem' />
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
									<SheetClose asChild key={route.href}>
										<Link
											href={route.href}
											className={cn(
												'hover:text-blue-500 text-[16px]',
												route.active ? 'font-bold text-primary-color' : ''
											)}
										>
											{route.label}
										</Link>
									</SheetClose>
								);
							})}
						</div>

						<div>
							<SheetClose asChild>
								<div className='flex items-center justify-center space-x-5'>
									<Button
										variant='outline'
										className='border-none px-5 font-semibold'
										onClick={() => router.push('/sign-in')}
									>
										Log in
									</Button>
									<Button
										variant='default'
										onClick={() => router.push('/sign-up')}
										className='bg-primary-color px-5 hover:bg-blue-900'
									>
										Sign Up
									</Button>
								</div>
							</SheetClose>
							<SheetFooter>
								<Image
									src='/assets/svg/gif.svg'
									alt='Rocket People'
									className='my-3'
									width={500}
									height={500}
								/>
							</SheetFooter>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default Header;
