'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

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
		header: 'Date',
	},
	{
		accessorKey: 'actions',
		header: '',
		cell: ({ row }) => <CellAction data={row} />,
	},
];
