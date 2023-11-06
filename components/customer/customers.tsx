'use client';

import { useModal } from '@/hooks/use-modal-store';
import { format } from 'date-fns';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { UserPlus, Users } from 'lucide-react';
import BreadCrumb from '../shared/breadcrumb';
import { Button } from '../ui/button';
import { DataTable } from '../ui/data-table';
import { Separator } from '../ui/separator';
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
			tableAddress: customer.city + ' ' + customer.state,
			date: format(customer.createdAt, 'MMMM dd, yyyy'),
			...customer,
		};
	});

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<Users />}
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
					<UserPlus />
					<span className='mx-1'>Create Customer</span>
				</Button>
			</div>
			<Separator className='my-2' />

			<div>
				<DataTable
					columns={columns}
					data={formattedCustomers}
					searchKey='name'
				/>
			</div>
			<Separator className='my-2' />
		</main>
	);
};

export default Customers;
