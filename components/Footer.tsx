'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu';
import { IoChevronForwardOutline } from 'react-icons/io5';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const IconText = ({
	icon,
	text,
	link,
}: {
	icon: any;
	text: string;
	link?: string;
}) => {
	return (
		<div className='flex space-x-2 items-center'>
			{icon}
			{link ? (
				<Link
					href={`mailto:${link}`}
					target='_blank'
					className='hover:text-secondary-color'
				>
					{text}
				</Link>
			) : (
				<p>{text}</p>
			)}
		</div>
	);
};
const Footer = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);
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

	const subscribe = async () => {
		setError(false);
		if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
			setError(true);
			return;
		}
	};
	return (
		<div className='bg-dark-primary p-4 w-full  min-h-[200px] mt-auto'>
			<div className='max-w-7xl mx-auto flex flex-col text-white py-10'>
				<Image
					src='/assets/images/white-logo.png'
					alt='White Realty Central Logo'
					width={180}
					height={180}
				/>
				<div className='flex flex-wrap flex-col md:flex-row items-start justify-between mt-10 space-y-10 md:space-y-0'>
					<div className='space-y-3 max-w-sm flex-1'>
						<h1 className='font-semibold text-lg'>Get in Touch</h1>
						<div className='space-y-2 text-[16px]'>
							<IconText
								icon={<LuMapPin size='1.2rem' />}
								text='Abuja, Federal Capital Territory, Nigeria'
							/>
							<IconText
								icon={<LuMail size='1.2rem' />}
								text='isahibn08@gmail.com'
								link='isahibn08@gmail.com'
							/>
							<IconText
								icon={<LuPhone size='1.2rem' />}
								text='+234 814 2711 631'
							/>
						</div>
					</div>
					<div className='space-y-3 max-w-sm flex-1'>
						<h1 className='font-semibold text-lg'>Quick Links</h1>
						<div className='space-y-2 text-[16px]'>
							{routes.map((route) => (
								<div
									className='flex space-x-2 items-center group '
									key={route.href}
								>
									<IoChevronForwardOutline className='group-hover:text-secondary-color' />
									<Link
										href={route.href}
										className='group-hover:text-secondary-color'
									>
										{route.label}
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className='space-y-3 max-w-sm flex-1'>
						<h1 className='font-semibold text-lg'>Newsletter</h1>
						<div className='text-[16px]'>
							<p>
								Subscribe to our newsletters to receive the latest news about
								our company
							</p>
							<div className='flex border-2 border-gray-100 items-center max-w-fit mt-2'>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Your Email'
									className='border-none outline-none placeholder:text-gray-400 p-2 h-full  bg-transparent'
								/>
								<Button
									className='text-white bg-secondary-color rounded-none border-none hover:bg-teal-700'
									onClick={subscribe}
								>
									Subscribe
								</Button>
							</div>
							{error && (
								<p className='text-red-500 text-sm '>
									Invalid Email. Enter a valid Email
								</p>
							)}
						</div>
					</div>
				</div>
				<Separator className='my-5' />
				<div className='flex flex-wrap flex-col sm:flex-row space-y-3 items-start sm:items-center justify-evenly text-md font-light text-gray-400 '>
					<p>
						Copyright &copy; Realty Central {new Date().getFullYear()} , All
						rights reserved.
					</p>
					<Link href='/' className='hover:text-white'>
						Terms of Service
					</Link>
					<Link href='/' className='hover:text-white'>
						Policy of Privacy
					</Link>
				</div>{' '}
			</div>
		</div>
	);
};

export default Footer;
