import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

type JumbotronProps = {
	className: string;
	jumbotron: {
		title: string;
		content: string;
		imageUrl: string;
	};
};

const Jumbotron: React.FC<JumbotronProps> = ({ jumbotron, className }) => {
	const { title, content, imageUrl } = jumbotron;
	return (
		<div
			className={cn(
				'block space-y-5 md:space-y-0 md:flex items-center justify-between max-w-7xl mx-auto p-4',
				className
			)}
		>
			<div className='flex-1'>
				<div className='max-w-md space-y-3 md:space-y-5'>
					<h1 className='font-semibold text-lg md:text-2xl text-primary-color'>
						{title}
					</h1>
					<p className='font-medium text-sm'>{content}</p>
				</div>
			</div>
			<div className='flex-1'>
				<Image
					src={imageUrl || `/assets/images/docs-mgt.jpg`}
					alt={`${title} image`}
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default Jumbotron;
