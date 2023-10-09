'use client';

import AccountProfile from '@/components/form/account-profile';
import { userSchema } from '@/lib/validations/user';
import { UserData } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod';

const ProfileForm = ({ userData }: { userData: UserData }) => {
	const router = useRouter();
	const [files, setFiles] = useState<File[]>([]);
	const [loading, setLoading] = useState(false);

	const defaultValues = userData;

	const form = useForm<z.infer<typeof userSchema>>({
		resolver: zodResolver(userSchema),
		defaultValues,
	});

	const onSubmit = async (values: z.infer<typeof userSchema>) => {
		setLoading(true);
		try {
			await axios.patch(`/api/user`, values);
			setLoading(false);
			toast.success('Edit profile completed');
		} catch (err) {
			setLoading(false);
			toast.error('Something went wrong');
		}
	};

	const allProps: any = {
		form,
		onSubmit,
		setFiles,
		loading,
		setLoading,
		userData,
		btnTitle: 'Save',
	};
	return (
		<div>
			<AccountProfile {...allProps} />
		</div>
	);
};

export default ProfileForm;
