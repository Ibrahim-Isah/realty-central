import { Button } from '@/components/ui/button';
import { SignOutButton } from '@clerk/nextjs';
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
					<DashboardContent setSidebarOpen={() => null} />
				</div>
				<SignOutButton>
					<Button
						variant='outline'
						className='border border-primary-color mb-16 md:mb-10'
					>
						Log out
					</Button>
				</SignOutButton>
			</div>
		</>
	);
};

export default DashboardSidebar;
