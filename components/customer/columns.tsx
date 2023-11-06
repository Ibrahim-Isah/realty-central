'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Button } from '../ui/button';
import { ArrowUpDownIcon } from 'lucide-react';

export interface Customer {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: string;
	city: string;
	state: string;
	country: string;
	createdAt: string;
	updatedAt: string;
}

export const columns: ColumnDef<Customer>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'phone',
		header: 'Phone',
	},
	{
		accessorKey: 'tableAddress',
		header: 'Address',
	},
	{
		accessorKey: 'date',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Date
					<ArrowUpDownIcon size={'1rem'} className='mx-1' />
				</Button>
			);
		},
	},
	{
		accessorKey: 'actions',
		header: '',
		cell: ({ row }) => <CellAction data={row} />,
	},
];
