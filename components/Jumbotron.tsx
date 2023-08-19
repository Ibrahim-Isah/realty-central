import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import FadeIn, { FadeInStagger } from './fade-in';

type JumbotronProps = {
	className: string;
	jumbotron: {
		title: string;
		content: string;
		imageUrl: string;
	};
	width?: number;
	height?: number;
};

const Jumbotron: React.FC<JumbotronProps> = ({
	jumbotron,
	className,
	width,
	height,
}) => {
	const { title, content, imageUrl } = jumbotron;
	return (
		<div
			className={cn(
				'block space-y-5 md:space-y-0 md:flex items-center justify-between max-w-7xl mx-auto p-4',
				className
			)}
		>
			<FadeIn className='flex-1'>
				<div className='max-w-md space-y-3 md:space-y-5'>
					<h1 className='font-inter font-semibold text-lg md:text-2xl text-primary-color'>
						{title}
					</h1>
					<p className='font-medium text-sm'>{content}</p>
				</div>
			</FadeIn>
			<FadeIn className='flex-1'>
				<Image
					src={imageUrl || `/assets/images/docs-mgt.jpg`}
					alt={`${title} image`}
					width={width || 450}
					height={height || 450}
					className='px-2'
				/>
			</FadeIn>
		</div>
	);
};

export default Jumbotron;
