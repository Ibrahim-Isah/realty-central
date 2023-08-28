import React from 'react';

import Image from 'next/image';
import DashboardContent from './dashboard-content';

const DashboardSidebar = () => {
	return (
		<>
			<div className='leftsidebar custom-scrollbar'>
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
			</div>
		</>
	);
};

export default DashboardSidebar;
