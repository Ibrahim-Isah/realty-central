import React from 'react';

import Image from 'next/image';
import DashboardContent from './dashboard-content';
import { Button } from '@/components/ui/button';

const DashboardSidebar = () => {
	return (
		<>
			<div className='leftsidebar custom-scrollbar mb-16 md:mb-10'>
				<div className='mt-5'>
					<div className='mb-8'>
						<Image
							src={'/assets/images/logo.png'}
							alt='Realty Logo'
							width={180}
							height={180}
						/>
					</div>
					<DashboardContent />
				</div>
				<Button variant='outline' className='border border-primary-color mb-3'>
					Log out
				</Button>
			</div>
		</>
	);
};

export default DashboardSidebar;
