'use client';

import { LuEdit, LuMail, LuMoreHorizontal, LuTrash } from 'react-icons/lu';

import { AiOutlineSchedule } from 'react-icons/ai';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useModal } from '@/hooks/use-modal-store';

interface CellActionProps {
	data: any;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const { onOpen } = useModal();
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='h-8 w-8 p-0'>
						<span className='sr-only'>Open menu</span>
						<LuMoreHorizontal className='h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => onOpen('editCustomer', data.original)}
					>
						<LuEdit className='mr-2 h-4 w-4' /> Edit Customer
					</DropdownMenuItem>
					<DropdownMenuItem className='cursor-pointer'>
						<LuMail className='mr-2 h-4 w-4' /> Send Email
					</DropdownMenuItem>
					<DropdownMenuItem className='cursor-pointer'>
						<AiOutlineSchedule className='mr-2 h-4 w-4' /> Schedule Appointment
					</DropdownMenuItem>
					<DropdownMenuItem className='text-red-600 hover:text-red-600 cursor-pointer'>
						<LuTrash className='mr-2 h-4 w-4 text-red-600' /> Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};
