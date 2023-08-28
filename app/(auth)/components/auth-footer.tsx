import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

const AuthFooter = () => {
	return (
		<div className='bg-dark-primary p-4 w-full '>
			<div className='max-w-7xl mx-auto flex flex-col text-white py-4'>
				<div className='flex flex-wrap flex-col sm:flex-row space-y-3 md:space-y-0 items-start sm:items-center justify-evenly   font-light text-gray-400 '>
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

export default AuthFooter;
