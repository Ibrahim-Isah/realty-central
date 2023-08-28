import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthHeader = () => {
	return (
		<div className='fixed mb-16 md:mb-10 w-full shadow-md bg-white z-50'>
			<div className='flex items-center justify-between max-w-7xl mx-auto p-4'>
				<Link href='/'>
					<Image
						src={'/assets/images/logo.png'}
						alt='Realty Logo'
						width={180}
						height={180}
					/>
				</Link>
			</div>
		</div>
	);
};

export default AuthHeader;
