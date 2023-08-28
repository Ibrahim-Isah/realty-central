import React from 'react';
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
import { Button } from '@/components/ui/button';
import { LuMenu } from 'react-icons/lu';
import Image from 'next/image';
import DashboardContent from './dashboard-content';

const DashboardTopbar = () => {
	return (
		<div className='topbar'>
			<div className='block lg:hidden'>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							aria-label='Menu Icon'
							variant='outline'
							className='flex lg:hidden hover:bg-[#00336611] p-[9px] rounded-full border-none'
						>
							<LuMenu size='1.5rem' />
						</Button>
					</SheetTrigger>
					<SheetContent
						className='flex flex-col w-[300px] h-screen justify-between'
						side='left'
					>
						<div>
							<SheetHeader>
								<SheetTitle className='mb-8'>
									<Image
										src={'/assets/images/logo.png'}
										alt='Realty Logo'
										width={180}
										height={180}
									/>
								</SheetTitle>
							</SheetHeader>
							<DashboardContent />
						</div>
						<Button
							variant='outline'
							className='border border-primary-color mb-3'
						>
							Log out
						</Button>
					</SheetContent>
				</Sheet>
			</div>
			DashboardTopbar
		</div>
	);
};

export default DashboardTopbar;
