import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { faqs } from '@/lib/data';
import React from 'react';

const Faqs = () => {
	return (
		<main className=''>
			<div className='bg-[#f5f5f5] min-h-[50vh]'>
				<div className='max-w-7xl mx-auto p-4'>
					<div className='flex flex-col items-center mb-5 mt-14 sm:mt-24 md:mt-32 space-y-5 '>
						<div className='bg-[#52789544] py-1 px-5 rounded-xl'>
							<p className='pill'>Faqs</p>
						</div>
						<h1 className='mainTitle'>Frequently Asked Questions</h1>
						<p className='text-sm text-center sm:text-left   lg:text-lg  font-medium'>
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
					<Accordion type='single' collapsible>
						{faqs.map((faq, index) => {
							return (
								<AccordionItem value={`item-${index + 1}`} key={index}>
									<AccordionTrigger className='text-dark-primary'>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent>
										{faq.answer.map((answer) => {
											return (
												<li key={answer} className='mt-2'>
													{answer}
												</li>
											);
										})}
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
		</main>
	);
};

export default Faqs;
