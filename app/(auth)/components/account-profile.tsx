'use client';
import ImageUpload from '@/components/shared/image-upload';
import { UserData } from '@/types';
import { UserButton } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { ChangeEvent, useRef, useState } from 'react';
import { userSchema } from '@/lib/validations/user';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@radix-ui/react-separator';
import image from 'next/image';
import { Button } from '@/components/ui/button';

interface AccountProfileProps {
	userData: UserData;
	btnTitle: string;
}

const AccountProfile: React.FC<AccountProfileProps> = ({
	userData,
	btnTitle,
}) => {
	const [files, setFiles] = useState<File[]>([]);

	const defaultValues = userData;

	const form = useForm<z.infer<typeof userSchema>>({
		resolver: zodResolver(userSchema),
		defaultValues,
	});

	const onSubmit = (values: z.infer<typeof userSchema>) => {
		console.log(values);
	};

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
					<div className='grid grid-cols-1 gap-3 sm:grid-cols-12'>
						<div className='col-span-4'>
							<FormField
								control={form.control}
								name='profileImage'
								render={({ field }) => (
									<FormItem className='flex items-center gap-4'>
										<Card className='max-w-xs h-72 p-0 flex flex-col items-center'>
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
							<p>{userData.userId}</p> <p>{btnTitle}</p>
						</div>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default AccountProfile;
