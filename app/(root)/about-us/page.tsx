import React from 'react';
import Image from 'next/image';

interface TeamCardProps {
	imageUrl: string;
	name: string;
	title: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageUrl, name, title }) => {
	return (
		<div className='rounded-md shadow-md text-white space-y-7 pb-10 min-h-[300px] h-full'>
			<div className=''>
				<Image
					src={imageUrl || '/assets/images/abba.jpg'}
					alt={name || 'team member'}
					width={350}
					height={200}
					className='object-scale-down rounded-lg '
				/>
			</div>
			<div className='text-center space-y-3'>
				<h1 className='font-bold font-inter text-lg sm:text-2xl'>{name}</h1>
				<h2 className='font-poppins text-sm sm:text-md'>{title}</h2>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<main className=''>
			{/* Hero Page Section */}
			<div className='bg-[#f5f5f5] min-h-[70vh]'>
				<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto p-4'>
					<div className='flex flex-col items-center md:items-start my-14 sm:my-24 md:my-32 space-y-5 max-w-sm lg:max-w-xl'>
						<div className='bg-[#52789544] py-1 px-5 rounded-xl'>
							<p className='text-primary-color text-sm md:text-md'>About Us</p>
						</div>
						<h1 className='font-inter text-2xl md:text-4xl lg:text-5xl text-primary-color font-bold'>
							Streamlining real estate with intuitive software solutions.
						</h1>
						<p className='text-sm text-center sm:text-left md:text-md lg:text-lg  font-medium'>
							Realty Central leverages cutting-edge technology and automation to
							provide real estate agents and housing estates with an all-in-one
							property management platform that enhances productivity, client
							relationships, and strategic decision making.
						</p>
					</div>
					<div className='flex items-center justify-center'>
						<Image
							src='/assets/svg/aboutus.svg'
							alt='Standup Meetings Illustrations'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
			<div className='bg-white py-14'>
				<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto my-auto p-4 space-y-10 space-x-0 sm:space-x-5 sm:space-y-0'>
					<div className='space-y-4 max-w-lg'>
						<h1 className='font-inter  text-2xl md:text-4xl text-primary-color font-semibold'>
							Our Mission
						</h1>
						<p className='font-medium'>
							Our goal at Realty Central is to equip real estate professionals
							with the Real Smart Assistant, a state-of-the-art tool that
							combines website marketing, organized listing management, and
							effective client relationship management. By utilizing
							cutting-edge technology, we hope to increase profits and improve
							time management, ensuring that our clients succeed in the dynamic
							real estate market.
						</p>
					</div>
					<div className='space-y-4  max-w-lg'>
						<h1 className='font-inter  text-2xl md:text-4xl text-primary-color font-semibold'>
							Our Vision
						</h1>
						<p className='font-medium'>
							We want to create a world where REALTORS® and real estate agents
							are happier and less stressed. In this vision, technology
							doesn&apos;t take the place of their roles; rather, it serves to
							improve them, enabling them to streamline their business processes
							and complete routine tasks with greater effectiveness.
						</p>
					</div>
				</div>
			</div>
			<div className='min-h-[70vh] bg-gradient-to-r from-dark-primary  to-[#003366c4]'>
				<div className='text-center max-w-xl mx-auto py-10 px-4 md:px-0 space-y-3 text-white'>
					<h1 className='font-inter text-2xl md:text-4xl  font-bold'>
						Our Team
					</h1>
				</div>
				<div className='max-w-7xl flex flex-col sm:flex-row justify-center items-center mx-auto my-auto p-4'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center justify-center gap-4 lg:gap-10'>
						<TeamCard
							name='Isah Abba Ibrahim'
							title='Founder / CEO'
							imageUrl='/assets/images/abba-min.jpg'
						/>
						<TeamCard
							name='Usman Abdulhadi'
							title='CTO / Product Manager'
							imageUrl='/assets/images/abdulhadi.png'
						/>
						<TeamCard
							name='Yobe Muhammed Auwal '
							title='COO / Software Engineer'
							imageUrl='/assets/images/auwal-min.jpg'
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
