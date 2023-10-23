'use client';

import { useModal } from '@/hooks/use-modal-store';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { BsSortAlphaDown } from 'react-icons/bs';
import { LuUserPlus, LuUsers } from 'react-icons/lu';
import BreadCrumb from '../shared/breadcrumb';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Separator } from '../ui/separator';
import { format } from 'date-fns';
import { DataTable } from '../ui/data-table';
import { columns } from './columns';

type CustomersProps = {
	customers: any;
};

const Customers: React.FC<CustomersProps> = ({ customers }) => {
	const { onOpen } = useModal();
	const pathname = usePathname();
	const router = useRouter();

	const handleCreateCustomer = () => {
		router.push('/customers');
		onOpen('createCustomer', {});
	};

	const formattedCustomers = customers.map((customer: any) => {
		return {
			id: customer.id,
			name: customer.firstName + ' ' + customer.lastName,
			email: customer.email,
			phone: customer.phone,
			address: customer.city + ' ' + customer.state,
			date: format(customer.createdAt, 'MMMM dd, yyyy'),
			...customer,
		};
	});

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuUsers />}
				title='Customers'
				subtitle='Registered Customers'
				breadcrumb={breadcrumb}
			/>

			<div className='flex justify-between items-center '>
				<div className='space-y-1'>
					<h1 className='text-xl font-medium font-inter'>Manage Customers</h1>
					<p className='font-poppins text-[#737373] text-sm font-light'>
						Create and manage your customers data
					</p>
				</div>
				<Button
					variant='default'
					className='bg-primary-color align-middle hover:bg-blend-darken'
					onClick={handleCreateCustomer}
				>
					<LuUserPlus />
					<span className='mx-1'>Create Customer</span>
				</Button>
			</div>
			<Separator className='my-2' />
			{/* <div className='flex items-center justify-between'>
				<Input
					placeholder='Search Customers'
					className='max-w-md border border-primary-color'
				/>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant='outline'
							size={'sm'}
							className='border border-primary-color min-w-[5rem]'
						>
							<span className='mx-1'>Sort</span>
							<BsSortAlphaDown />
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-80'>
						<div className='grid gap-4'>
							<div className='space-y-2'>
								<h4 className='font-medium leading-none'>Sort</h4>
								<p className='text-sm text-muted-foreground'>Sort customers</p>
							</div>
							<div className='grid gap-2'>
								<p className='hover:bg-slate-100 w-full py-1 my-0 px-1 rounded cursor-pointer'>
									Name
								</p>
								<p className='hover:bg-slate-100 w-full py-1 my-0 px-1 rounded cursor-pointer'>
									Date Ascending
								</p>
								<p className='hover:bg-slate-100 w-full py-1 my-0 px-1 rounded cursor-pointer'>
									Date Descending
								</p>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div> */}
			<div>
				<DataTable columns={columns} data={formattedCustomers} />
			</div>
			<Separator className='my-2' />
		</main>
	);
};

export default Customers;
