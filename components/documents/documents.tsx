'use client';

import { FilePlus, FilesIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import BreadCrumb from '../shared/breadcrumb';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

interface DocumentsProps {
	documents: any;
}

const Documents: React.FC<DocumentsProps> = ({ documents }) => {
	const router = useRouter();
	const pathname = usePathname();

	// remove the first slash from the pathname
	const breadcrumb = pathname.slice(1);
	return (
		<>
			<main className=''>
				<BreadCrumb
					icon={<FilesIcon />}
					title='Documents'
					subtitle='Listing of all companies document'
					breadcrumb={breadcrumb}
				/>

				<div className='flex justify-between items-center '>
					<div className='space-y-1'>
						<h1 className='text-xl font-medium font-inter'>Manage Documents</h1>
						<p className='font-poppins text-[#737373] text-sm font-light'>
							Add and manage your documents
						</p>
					</div>
					<Button
						variant='default'
						className='bg-primary-color align-middle hover:bg-blend-darken'
						onClick={() => {
							router.push('/documents/add');
						}}
					>
						<FilePlus />
						<span className='mx-1'>Upload Document(s)</span>
					</Button>
				</div>
				<Separator className='my-2' />
			</main>
		</>
	);
};

export default Documents;
