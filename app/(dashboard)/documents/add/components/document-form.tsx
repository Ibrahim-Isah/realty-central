'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import FileUpload from '@/components/shared/file-upload';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { Customer, User } from '@prisma/client';
import { FilesIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface DocumentProps {
	user: User;
	customers: Customer[];
}

const documentSchema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
	description: z.string().min(3, { message: 'Description is required' }),
	url: z.string().min(1, { message: 'Url is required' }),
	customerId: z.string().min(1, { message: 'Customer is required' }),
});

const DocumentForm: React.FC<DocumentProps> = ({ user, customers }) => {
	const pathname = usePathname();
	const breadcrumb = pathname.slice(1);

	const defaultValues = {
		name: '',
		description: '',
		url: '',
		customerId: '',
	};

	const form = useForm<z.infer<typeof documentSchema>>({
		resolver: zodResolver(documentSchema),
		defaultValues,
	});

	const onSubmit = async (values: z.infer<typeof documentSchema>) => {
		console.log(values);
	};
	return (
		<div>
			<BreadCrumb
				icon={<FilesIcon />}
				title='Add Documents'
				subtitle='Create and Upload New Documents'
				breadcrumb={breadcrumb}
			/>
			<div className='max-w-4xl flex flex-col justify-between w-full mx-auto p-4'>
				<Card className='pb-4 mb-5'>
					<CardHeader className='text-center text-xl font-inter'>
						Upload a new document
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-5'
							>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel className=' font-inter'>
												Document Name
											</FormLabel>
											<FormControl>
												<Input
													type='text'
													placeholder='Document Name'
													{...field}
												/>
											</FormControl>
											<FormMessage className='text-xs' />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='description'
									render={({ field }) => (
										<FormItem>
											<FormLabel className=' font-inter'>
												Document Description
											</FormLabel>
											<FormControl>
												<Input
													type='text'
													placeholder='Document Description'
													{...field}
												/>
											</FormControl>
											<FormMessage className='text-xs' />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='customerId'
									render={({ field }) => (
										<FormItem>
											<FormLabel className=' font-inter'>
												Related Customer
											</FormLabel>
											<FormControl>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Select Customer' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectGroup>
															<SelectLabel>Customers</SelectLabel>
															{customers.map((customer) => (
																<SelectItem
																	key={customer.id}
																	value={customer.id}
																>
																	{customer.firstName + ' ' + customer.lastName}
																</SelectItem>
															))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage className='text-xs' />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='url'
									render={({ field }) => (
										<FormItem>
											<FormLabel className=' font-inter'>
												Document URL
											</FormLabel>
											<FormControl>
												<FileUpload />
											</FormControl>
											<FormMessage className='text-xs' />
										</FormItem>
									)}
								/>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DocumentForm;
