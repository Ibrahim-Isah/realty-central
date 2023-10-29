'use client';
import BreadCrumb from '@/components/shared/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Files } from 'lucide-react';

const Documents = () => {
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<main className=''>
			<BreadCrumb
				icon={<Files />}
				title='Documents'
				subtitle='Listing of all companies document'
				breadcrumb={breadcrumb}
			/>
		</main>
	);
};

export default Documents;
