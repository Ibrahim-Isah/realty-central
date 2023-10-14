'use client';

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { useModal } from '@/hooks/use-modal-store';
import { customerSchema } from '@/lib/validations/customer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { revalidatePath } from 'next/cache';

const CustomerModal = () => {
	const params = useSearchParams();
	const { isOpen, onClose, type, data } = useModal();

	const isModalOpen = isOpen && type === 'createCustomer';

	const defaultValues = {
		firstName: data?.firstName,
		lastName: data?.lastName,
		email: data?.email,
		phone: data?.phone,
		address: data?.address,
		city: data?.city,
		state: data?.state,
		country: data?.country,
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
			await axios.post('/api/customer', data);
			toast.success('Customer created successfully');
			revalidatePath('/customers');
			handleClose();
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong');
		}
	};
	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className='bg-white text-black overflow-hidden p-5'>
				<DialogHeader className='pt-8 px-6'>
					<DialogTitle className='font-inter text-primary-color text-2xl text-center font-semibold'>
						{params?.get('id') ? 'Edit' : 'Create'} Customer
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className='grid grid-cols-1 md:grid-cols-2 md:gap-2'>
							<FormField
								control={form.control}
								name='firstName'
								render={({ field }) => (
									<FormItem className='mb-2'>
										<FormLabel className='font-inter'>First Name</FormLabel>
										<FormControl>
											<Input {...field} placeholder='First Name' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='lastName'
								render={({ field }) => (
									<FormItem className='mb-2'>
										<FormLabel className='font-inter'>Last Name</FormLabel>
										<FormControl>
											<Input {...field} placeholder='Last Name' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 md:gap-2'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem className='mb-2'>
										<FormLabel className='font-inter'>Email</FormLabel>
										<FormControl>
											<Input {...field} placeholder='example@mail.com' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem className='mb-2'>
										<FormLabel className='font-inter'>Phone Number</FormLabel>
										<FormControl>
											<Input {...field} placeholder='Phone Number' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name='address'
							render={({ field }) => (
								<FormItem className='mb-2'>
									<FormLabel className='font-inter'>Address</FormLabel>
									<FormControl>
										<Input {...field} placeholder='123 Street. Example' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='city'
							render={({ field }) => (
								<FormItem className='mb-2'>
									<FormLabel className='font-inter'>City</FormLabel>
									<FormControl>
										<Input {...field} placeholder='Victoria Island' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='state'
							render={({ field }) => (
								<FormItem className='mb-2'>
									<FormLabel className='font-inter'>State </FormLabel>
									<FormControl>
										<Input {...field} placeholder='Lagos ' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='country'
							render={({ field }) => (
								<FormItem className='mb-2'>
									<FormLabel className='font-inter'>Country</FormLabel>
									<FormControl>
										<Input {...field} placeholder='Nigeria' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<DialogFooter className='bg-gray-100 px-6 py-4'>
								<Button
									type='submit'
									className='bg-primary-color'
									onClick={form.handleSubmit(onSubmit)}
								>
									Submit
								</Button>
							</DialogFooter>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default CustomerModal;
