'use client';

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { useModal } from '@/hooks/use-modal-store';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const CustomerModal = () => {
	const params = useSearchParams();
	const { isOpen, onClose, type, data } = useModal();

	const isModalOpen = isOpen && type === 'createCustomer';

	const handleClose = () => {
		console.log('closed');
		onClose();
	};
	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className='bg-white text-black p-0 overflow-hidden '>
				<DialogHeader className='pt-8 px-6'>
					<DialogTitle className='font-inter text-primary-color text-2xl text-center font-semibold'>
						{params?.get('id') ? 'Edit' : 'Create'} Customer
					</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default CustomerModal;
