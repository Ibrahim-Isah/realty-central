import { IconText } from '@/components/Footer';
import Image from 'next/image';
import React from 'react';
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu';

const ContactForm = () => {
	return (
		<div className='bg-[#f5f5f5] py-12 px-6 shadow-md rounded-2xl h-[400px] min-w-[300px]'>
			<div>
				<h1 className='font-inter text-primary-color text-xl md:text-2xl font-semibold text-center'>
					Send us a Message
				</h1>
			</div>
		</div>
	);
};

const Contact = () => {
	return (
		<div className='bg-white min-h-[70vh]  my-14 sm:my-24 md:my-32'>
			<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto p-4'>
				<div className='flex flex-col items-center md:items-start space-y-8 max-w-sm sm:max-w-md lg:max-w-md'>
					<div className='space-y-3'>
						<h1 className='font-inter text-center sm:text-left text-2xl md:text-3xl text-primary-color font-bold'>
							Let&apos;s Get In Touch
						</h1>
						<p className='text-sm text-center sm:text-left md:text-md  font-medium'>
							Having any question about our Us, Fill out the form and our
							experts will get back to you as soon as possible
						</p>
					</div>
					<div className='flex sm:hidden'>
						<ContactForm />
					</div>
					<div className='space-y-3'>
						<h1 className='font-inter text-lg text-primary-color font-bold'>
							Our Office
						</h1>
						<Image
							src='/assets/images/office.jpg'
							alt='Standup Meetings Illustrations'
							width={500}
							height={500}
						/>
					</div>
					<div className='space-y-3 self-start'>
						<h1 className='font-inter font-semibold text-lg'>Get in Touch</h1>
						<div className='space-y-2 text-[16px]'>
							<IconText
								icon={<LuMapPin size='1.2rem' />}
								text='Abuja, Federal Capital Territory, Nigeria'
							/>
							<IconText
								icon={<LuMail size='1.2rem' />}
								text='isahibn08@gmail.com'
								link='isahibn08@gmail.com'
							/>
							<IconText
								icon={<LuPhone size='1.2rem' />}
								text='+234 814 2711 631'
							/>
						</div>
					</div>
				</div>
				<div className='hidden sm:flex items-center justify-center mx-auto'>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;
