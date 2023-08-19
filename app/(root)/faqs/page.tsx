import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Faqs = () => {
	return (
		<main className=''>
			<div className='bg-[#f5f5f5] min-h-[50vh]'>
				<div className='max-w-7xl mx-auto p-4'>
					<div className='flex flex-col items-center mb-5 mt-14 sm:mt-24 md:mt-32 space-y-5 '>
						<div className='bg-[#52789544] py-1 px-5 rounded-xl'>
							<p className='text-primary-color text-sm md:text-md'>Faqs</p>
						</div>
						<h1 className='font-inter text-2xl md:text-4xl lg:text-5xl text-primary-color font-bold'>
							Frequently Asked Questions
						</h1>
						<p className='text-sm text-center sm:text-left md:text-md lg:text-lg  font-medium'>
							Have questions? We are here to help
						</p>
						<div>
							<Input placeholder='Search Questions' />
						</div>
					</div>
				</div>
			</div>
			<div className='max-w-7xl mx-auto p-4 my-7'>
				<div className='mx-auto max-w-full sm:max-w-2xl'>
					<Accordion
						type='single'
						// className='border-2 border-primary-color rounded-lg px-4'
						collapsible
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='text-dark-primary'>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger className='text-dark-primary'>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger className='text-dark-primary'>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</main>
	);
};

export default Faqs;
