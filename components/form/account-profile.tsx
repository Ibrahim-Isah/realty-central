'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { userSchema } from '@/lib/validations/user';
import { UserData } from '@/types';
import { Separator } from '@radix-ui/react-separator';
import React, { ChangeEvent } from 'react';
import * as z from 'zod';

interface AccountProfileProps {
	userData: UserData;
	btnTitle: string;
	form: any;
	onSubmit: (values: z.infer<typeof userSchema>) => void;
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountProfile: React.FC<AccountProfileProps> = ({
	userData,
	btnTitle,
	form,
	onSubmit,
	setFiles,
	loading,
}) => {
	const handleImage = (
		e: ChangeEvent<HTMLInputElement>,
		fieldChange: (value: string) => void
	) => {
		e.preventDefault();

		const fileReader = new FileReader();

		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];
			setFiles(Array.from(e.target.files));

			if (!file.type.includes('image')) return;

			fileReader.onload = async (event) => {
				const imageDataUrl = event.target?.result?.toString() || '';
				fieldChange(imageDataUrl);
			};

			fileReader.readAsDataURL(file);
		}
	};

	return (
		<div className='max-w-7xl flex flex-col justify-between w-full mx-auto p-4'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='grid grid-cols-1 sm:gap-3 sm:grid-cols-12 space-y-5 sm:space-y-0'>
						<div className='col-span-1 sm:col-span-4'>
							<FormField
								control={form.control}
								name='profileImage'
								render={({ field }) => (
									<FormItem className='flex items-center gap-4'>
										<Card className='w-full sm:max-w-xs h-72 p-0 flex flex-col items-center'>
											<CardContent className='flex flex-col items-center w-full space-y-3'>
												<FormLabel className='account-form_image-label'>
													<Avatar className='h-32 w-auto my-5'>
														<AvatarImage
															src={
																field.value ||
																'https://www.gravatar.com/avatar?d=mp'
															}
														/>
														<AvatarFallback className='h-auto w-auto'>
															{userData.firstName || 'DP'}
														</AvatarFallback>
													</Avatar>
												</FormLabel>
												<Separator />
												<CardFooter className='w-full '>
													<FormControl className='flex-1 text-base-semibold text-gray-200'>
														<>
															<Input
																type='file'
																accept='image/*'
																placeholder='Add profile photo'
																className='w-full cursor-pointer hover:bg-slate-50'
																onChange={(e) => handleImage(e, field.onChange)}
															/>
														</>
													</FormControl>
												</CardFooter>
											</CardContent>
										</Card>
									</FormItem>
								)}
							/>
						</div>
						<div className='col-span-8'>
							<Card className='pb-4 mb-5'>
								<CardHeader>
									<p className='text-base font-semibold font-inter '>
										Personal Information
									</p>
								</CardHeader>
								<CardContent className='grid grid-cols-1 md:grid-cols-2 sm:gap-3'>
									<FormField
										control={form.control}
										name='firstName'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>
													First Name
												</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='First Name'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='lastName'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>Last Name</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='Last Name'
														{...field}
													/>
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
												<FormLabel className=' font-inter'>Email</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='example@gmail.com'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='companyName'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>
													Company Name
												</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='Your Company Name'
														{...field}
													/>
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
												<FormLabel className=' font-inter'>
													Phone Number
												</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='Your Phone Number'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='about'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>Bio</FormLabel>
												<FormControl>
													<Textarea
														rows={4}
														placeholder='About you or your company'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
								</CardContent>
							</Card>
							<Card className='pb-4 mb-5'>
								<CardHeader>
									<p className='text-base font-semibold font-inter '>
										Other Information
									</p>
								</CardHeader>
								<CardContent className='grid grid-cols-1 md:grid-cols-2 sm:gap-3'>
									<FormField
										control={form.control}
										name='address'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>Address</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='ex: 123 Street, NT district'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='city'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>City</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='ex: Abuja'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='state'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>State</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='ex: Federal Capital Territory'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='country'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>Country</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='ex: Nigeria'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='zipCode'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>Zip Code</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='ex: 123456'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='website'
										render={({ field }) => (
											<FormItem>
												<FormLabel className=' font-inter'>
													Your website
												</FormLabel>
												<FormControl>
													<Input
														type='text'
														placeholder='https://www.yourwebsite.com'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-xs' />
											</FormItem>
										)}
									/>
								</CardContent>
							</Card>
							<Button type='submit' className='w-full' disabled={loading}>
								{btnTitle}
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default AccountProfile;
