import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import FadeIn, { FadeInStagger } from '@/components/fade-in';

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
				<h2 className='font-poppins text-sm  '>{title}</h2>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<main className=''>
			<div className='bg-[#f5f5f5] min-h-[70vh]'>
				<FadeIn>
					<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto p-4'>
						<div className='flex flex-col mx-auto md:mx-0 items-center md:items-start my-14 sm:my-24 md:my-32 space-y-5 max-w-sm lg:max-w-xl'>
							<div className='bg-[#52789544] py-1 px-5 rounded-xl'>
								<p className='pill'>About Us</p>
							</div>
							<h1 className='mainTitle'>
								Streamlining real estate with intuitive software solutions.
							</h1>
							<p className='text-sm text-center sm:text-left   lg:text-lg  font-medium'>
								Realty Central leverages cutting-edge technology and automation
								to provide real estate agents and housing estates with an
								all-in-one property management platform that enhances
								productivity, client relationships, and strategic decision
								making.
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
				</FadeIn>
			</div>
			<div className='bg-white py-14'>
				<FadeInStagger>
					<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto my-auto p-4 space-y-10 space-x-0 sm:space-x-5 sm:space-y-0'>
						<FadeIn>
							<div className='space-y-4 max-w-lg'>
								<h1 className='font-inter  text-2xl md:text-4xl text-primary-color font-semibold'>
									Our Mission
								</h1>
								<p className='font-medium'>
									Our goal at Realty Central is to equip real estate
									professionals with the Real Smart Assistant, a
									state-of-the-art tool that combines website marketing,
									organized listing management, and effective client
									relationship management. By utilizing cutting-edge technology,
									we hope to increase profits and improve time management,
									ensuring that our clients succeed in the dynamic real estate
									market.
								</p>
							</div>
						</FadeIn>
						<FadeIn>
							<div className='space-y-4  max-w-lg'>
								<h1 className='font-inter  text-2xl md:text-4xl text-primary-color font-semibold'>
									Our Vision
								</h1>
								<p className='font-medium'>
									We want to create a world where REALTORS® and real estate
									agents are happier and less stressed. In this vision,
									technology doesn&apos;t take the place of their roles; rather,
									it serves to improve them, enabling them to streamline their
									business processes and complete routine tasks with greater
									effectiveness.
								</p>
							</div>
						</FadeIn>
					</div>
				</FadeInStagger>
			</div>
			<div className='min-h-[70vh] bg-gradient-to-r from-dark-primary  to-[#003366c4]'>
				<div className='text-center max-w-xl mx-auto py-10 px-4 md:px-0 space-y-3 text-white'>
					<h1 className='font-inter text-2xl md:text-4xl  font-bold'>
						Our Team
					</h1>
				</div>
				<div className='max-w-7xl flex flex-col sm:flex-row justify-center items-center mx-auto my-auto p-4'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center justify-center gap-4 lg:gap-10'>
						<FadeIn>
							<TeamCard
								name='Isah Abba Ibrahim'
								title='Founder / CEO'
								imageUrl='/assets/images/abba-min.jpg'
							/>
						</FadeIn>
						<FadeIn>
							<TeamCard
								name='Usman Abdulhadi'
								title='CTO / Product Manager'
								imageUrl='/assets/images/abdulhadi.png'
							/>
						</FadeIn>
						<FadeIn>
							<TeamCard
								name='Yobe Muhammed Auwal '
								title='COO / Software Engineer'
								imageUrl='/assets/images/auwal-min.jpg'
							/>
						</FadeIn>
					</div>
				</div>
			</div>
			<div className='py-14'>
				<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto my-auto p-4 space-y-10 space-x-0 sm:space-x-5 sm:space-y-0'>
					<div className='flex-1 self-center grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14 lg:gap-20 ml-5'>
						{aboutCards.map((card, index) => (
							<FadeIn key={index} className='backgroundCard'>
								<FadeInStagger>
									<Card className='shadow-none border-none'>
										<FadeIn>
											<CardHeader>{card.icon}</CardHeader>
										</FadeIn>
										<CardContent className=' space-y-4 text-lg'>
											<FadeIn>
												<h1 className='font-inter   md:text-xl font-semibold'>
													{card.title}
												</h1>
											</FadeIn>
											<FadeIn>
												<p className='font-normal text-sm'>{card.content}</p>
											</FadeIn>
										</CardContent>
									</Card>
								</FadeInStagger>
							</FadeIn>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;

const aboutCards = [
	{
		icon: (
			<Image
				src='/assets/svg/moneybag.svg'
				alt='connection'
				width={60}
				height={60}
				className=' text-3xl'
			/>
		),
		title: 'Increase your income',
		content:
			"The truth of the matter is that REALTORS® and real estate agents exclusively earn income when they achieve successful sales. Acknowledging the challenges of this demanding industry, we're dedicated to positioning you for triumph. Armed with potent tools and solutions, we're committed to aiding you in drawing in clients and finalizing transactions, ultimately propelling your earnings to new heights.",
	},
	{
		icon: (
			<Image
				src='/assets/svg/hand.svg'
				alt='connection'
				width={60}
				height={60}
				className=' text-3xl'
			/>
		),
		title: 'Here to help you, not replace you',
		content:
			'Indeed, the RealtyCentral Real Smart Assistant serves as an assistant in its essence. It is essential to note that this tool does not intend to supplant the genuine human connections that are fostered with clients. Our platform will steadfastly refrain from being a direct means of interacting with the clients of REALTORS® and real estate agents.',
	},
	{
		icon: (
			<Image
				src='/assets/svg/lightbulb.svg'
				alt='connection'
				width={60}
				height={60}
				className=' text-3xl'
			/>
		),
		title: 'Let IT work its magic',
		content:
			"At RealtyCentral, we hold the belief that each and every REALTOR® should be able to harness the advantages offered by technology. While concepts like big data, cloud computing, MLS® data, the Internet, and automation might sound complex, they don't have to be inscrutable. We are committed to aiding you in comprehending how these technological facets can simplify your real estate operations. Our aim is to demonstrate that integrating technology into your business.",
	},
	{
		icon: (
			<Image
				src='/assets/svg/time.svg'
				alt='connection'
				width={60}
				height={60}
				className=' text-3xl'
			/>
		),
		title: 'Save time and energy',
		content:
			'We understand that not everyone possesses a high level of technical expertise or the time to invest in intricate technical tasks. With My GoodReal, our objective is to simplify the process, enabling agents to swiftly establish or enhance their websites. This user-friendly approach is designed to alleviate the challenges of managing daily workloads, granting agents a sense of comfort and confidence.',
	},
];
