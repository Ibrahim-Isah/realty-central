import { fetchAllCustomers } from '@/actions/customer';
import { fetchUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import * as z from 'zod';
import DocumentForm from './components/document-form';
import { Customer } from '@prisma/client';

const Page = async () => {
	const user = await fetchUser();
	if (!user) return redirect('/sign-in');
	const customers = await fetchAllCustomers(user.id);

	return (
		<main>
			<DocumentForm user={user} customers={customers as Customer[]} />
		</main>
	);
};

export default Page;
