import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { useModal } from '@/hooks/use-modal-store';
import { customerSchema } from '@/lib/validations/customer';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod';

import { CustomerForm } from '../form/customer';
import { ScrollArea } from '../ui/scroll-area';
import { useRouter } from 'next/navigation';

const CustomerModal = () => {
	const { isOpen, onClose, type, payload, resetPayload } = useModal();
	const router = useRouter();

	const isModalOpen =
		(isOpen && type === 'createCustomer') || type === 'editCustomer';

	const defaultValues = {
		firstName: payload.firstName || '',
		lastName: payload.lastName || '',
		email: payload.email || '',
		phone: payload.phone || '',
		address: payload.address || '',
		city: payload.city || '',
		state: payload.state || '',
		country: payload.country || '',
	};

	const form = useForm<z.infer<typeof customerSchema>>({
		resolver: zodResolver(customerSchema),
		defaultValues,
	});

	const handleClose = () => {
		form.reset();
		onClose();
	};

	const onSubmit = async (data: z.infer<typeof customerSchema>) => {
		try {
			if (type === 'editCustomer') {
				await axios.put(`/api/customer/${data.id}`, {
					...data,
					userId: payload.userId,
				});
				toast.success('Customer updated successfully');
				resetPayload();
				router.refresh();
				handleClose();
			} else {
				await axios.post('/api/customer', data);
				toast.success('Customer created successfully');
				handleClose();
			}
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong');
		}
	};

	const formProps = {
		form,
		onSubmit,
		type,
		onClose,
		payload,
	};
	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className='bg-white text-black overflow-hidden py-5 h-[80vh] my-auto  rounded sm:h-auto'>
				<ScrollArea>
					<DialogHeader className='pt-8 pb-8 sm:pb-4 px-6'>
						<DialogTitle className='font-inter text-primary-color text-2xl text-center font-semibold'>
							{type === 'editCustomer' ? 'Edit' : 'Create'} Customer
						</DialogTitle>
					</DialogHeader>

					<CustomerForm {...formProps} />
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};

export default CustomerModal;
