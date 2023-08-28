'use client';

import { IconText } from '@/app/(root)/components/footer';
import Image from 'next/image';
import React from 'react';
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import FadeIn from '@/components/shared/fade-in';

const formSchema = z.object({
	firstname: z
		.string()
		.min(2, {
			message: 'Firstname must be at least 2 characters.',
		})
		.nonempty(),
	lastname: z.string().min(2, {
		message: 'Lastname must be at least 2 characters.',
	}),
	email: z.string().email().nonempty(),
	phone: z.string().min(10, {
		message: 'Phone number must be at least 10 characters.',
	}),
	message: z.string().min(10).nonempty(),
});

const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			message: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className='bg-[#f5f5f5] py-12 px-6 shadow-md rounded-2xl w-full'>
			<FadeIn>
				<h1 className='font-inter text-primary-color text-xl md:text-2xl font-semibold text-center'>
					Send us a Message
				</h1>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
						<FormField
							control={form.control}
							name='firstname'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-semibold'>First Name</FormLabel>
									<FormControl>
										<Input placeholder='Firstname' {...field} />
									</FormControl>
									<FormMessage className='text-xs' />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='lastname'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-semibold'>Last Name</FormLabel>
									<FormControl>
										<Input placeholder='Lastname' {...field} />
									</FormControl>
									<FormMessage className='text-xs' />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-semibold'>Email</FormLabel>
									<FormControl>
										<Input placeholder='Email' {...field} />
									</FormControl>
									<FormMessage className='text-xs' />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-semibold'>Phone No.</FormLabel>
									<FormControl>
										<Input placeholder='+234 800 000 000' {...field} />
									</FormControl>
									<FormMessage className='text-xs' />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-semibold'>Message</FormLabel>
									<FormControl>
										<Textarea placeholder='Message' {...field} />
									</FormControl>
									<FormMessage className='text-xs' />
								</FormItem>
							)}
						/>
						<Button
							type='submit'
							variant='default'
							className='bg-primary-color px-5 hover:bg-blue-900 w-full'
						>
							Submit
						</Button>
					</form>
				</Form>
			</FadeIn>
		</div>
	);
};

const Contact = () => {
	return (
		<div className='bg-white min-h-[70vh] mb-7  mt-14 sm:mt-24 md:mt-32'>
			<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto space-x-5 p-4'>
				<FadeIn className='flex flex-col items-center flex-1  md:items-start space-y-8 max-w-sm sm:max-w-md lg:max-w-md'>
					<div className='space-y-3'>
						<h1 className='font-inter text-center sm:text-left text-2xl md:text-3xl text-primary-color font-bold'>
							Let&apos;s Get In Touch
						</h1>
						<p className='text-sm text-center sm:text-left    font-medium'>
							Having any question about our Us, Fill out the form and our
							experts will get back to you as soon as possible
						</p>
					</div>
					<div className='flex sm:hidden w-full mx-auto justify-center items-center'>
						<ContactForm />
					</div>
					<div className='space-y-3'>
						<h1 className='font-inter text-lg text-primary-color font-bold'>
							Our Office
						</h1>
						<Image
							src='/assets/images/office.jpg'
							alt='Standup Meetings Illustrations'
							width={400}
							height={400}
						/>
					</div>
					<div className='space-y-3 self-start'>
						<h1 className='font-inter text-primary-color font-semibold text-lg'>
							Get in Touch
						</h1>
						<div className='space-y-2 text-[16px]'>
							<IconText
								icon={<LuMapPin size='1.2rem' />}
								text='Abuja, Federal Capital Territory, Nigeria'
							/>
							<IconText
								icon={<LuMail size='1.2rem' />}
								text='isahibn08@gmail.com'
								link='isahibn08@gmail.com'
							/>
							<IconText
								icon={<LuPhone size='1.2rem' />}
								text='+234 814 2711 631'
							/>
						</div>
					</div>
				</FadeIn>
				<div className='hidden sm:flex flex-1 items-center justify-center mx-auto w-full md:w-2/4'>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;
