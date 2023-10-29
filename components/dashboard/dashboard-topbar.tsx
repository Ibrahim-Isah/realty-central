'use client';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { Menu, Search } from 'lucide-react';
import DashboardContent from './dashboard-content';
import { useState } from 'react';

const DashboardTopbar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className='topbar'>
			<div className='block lg:hidden'>
				<Sheet
					open={sidebarOpen}
					onOpenChange={(open: any) => setSidebarOpen(open)}
				>
					<SheetTrigger asChild>
						<Button
							aria-label='Menu Icon'
							variant='outline'
							className='flex lg:hidden hover:bg-[#00336611] p-[9px] rounded-full border-none'
						>
							<Menu size='1.5rem' />
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
							<DashboardContent setSidebarOpen={setSidebarOpen} />
						</div>
						<Button
							variant='outline'
							className='border border-primary-color mb-16 md:mb-10'
						>
							Log out
						</Button>
					</SheetContent>
				</Sheet>
			</div>
			<div className='self-end justify-end'>
				<div className='max-w-2xl w-full mx-auto'>
					<label htmlFor='search' className='sr-only'>
						Search
					</label>
					<div className='relative w-full md:w-96 text-gray-600'>
						<input
							type='search'
							name='search'
							id='search'
							placeholder='Search'
							className='bg-white h-10 px-5 pr-10 shadow-md rounded-full text-sm focus:outline-none w-full'
						/>
						<button type='submit' className='absolute right-0 top-0 mt-3 mr-4 '>
							<Search />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardTopbar;
