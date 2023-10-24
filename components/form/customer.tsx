'use client';

import { useEffect } from 'react';
import { DialogFooter } from '../ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const CustomerForm = ({
	form,
	onSubmit,
	type,
	onClose,
	payload,
}: {
	form: any;
	onSubmit: (data: any) => void;
	type: string | null;
	onClose: () => void;
	payload: any;
}) => {
	useEffect(() => {
		if (payload) {
			form.setValue('firstName', payload.firstName);
			form.setValue('lastName', payload.lastName);
			form.setValue('email', payload.email);
			form.setValue('phone', payload.phone);
			form.setValue('address', payload.address);
			form.setValue('city', payload.city);
			form.setValue('state', payload.state);
			form.setValue('country', payload.country);
			form.setValue('id', payload.id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [payload]);
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='px-2'>
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
					<DialogFooter className=' px-6 py-4 flex flex-row justify-between items-center'>
						<Button
							variant={'outline'}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onClose();
							}}
							className='block sm:hidden'
						>
							Cancel
						</Button>
						<Button
							type='submit'
							className='bg-primary-color'
							onClick={form.handleSubmit(onSubmit)}
						>
							{type === 'editCustomer' ? 'Update' : 'Create'}
						</Button>
					</DialogFooter>
				</div>
			</form>
		</Form>
	);
};
