import React from 'react';
import { LuUser } from 'react-icons/lu';

interface BreadCrumbProps {
	icon?: any;
	breadcrumb: string;
	title: string;
	subtitle: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
	icon,
	breadcrumb,
	title,
	subtitle,
}) => {
	return (
		<div className='w-full pb-7 pt-3 flex flex-col space-y-5'>
			<div className='flex items-center '>
				{icon || ''}
				<p className='ml-1 text-sm font-medium'>{breadcrumb}</p>
			</div>
			<div className='space-y-2'>
				<h1 className='text-3xl font-medium font-inter'>{title}</h1>
				<p className='font-poppins text-[#737373] text-sm font-light'>
					{subtitle}
				</p>
			</div>
		</div>
	);
};

export default BreadCrumb;
