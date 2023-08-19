'use client';

import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

import Jumbotron from '@/components/Jumbotron';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { homeJumbotron } from '@/lib/constants';
import { cn } from '@/lib/utils';
import FadeIn, { FadeInStagger } from '@/components/fade-in';

const cards = [
	{
		icon: (
			<Image
				src='/assets/svg/tasks.svg'
				alt='connection'
				width={40}
				height={40}
				className='text-white text-3xl'
			/>
		),
		title: 'Simplify Complex Task',
		content:
			'Realty Central simplifies property management tasks like document management, lease tracking, and customer interactions.',
	},
	{
		icon: (
			<Image
				src='/assets/svg/network.svg'
				alt='connection'
				width={40}
				height={40}
				className='text-white text-3xl'
			/>
		),
		title: 'Stay Connected and Engaged',

		content:
			'Build strong client relationships through personalized communication and exceptional service.',
	},
	{
		icon: (
			<Image
				src='/assets/svg/growth.svg'
				alt='connection'
				width={40}
				height={40}
				className='text-white text-3xl'
			/>
		),
		title: 'Insightful Decisions, Informed Success',
		content:
			'Realty Central equips you with real-time analytics and performance metrics for data-driven decisions.',
	},
];

const reviews = [
	{
		name: 'Isah Abba Ibrahim',
		title: 'CEO Isah Homes',
		review:
			"Realty Central's Document Management feature has elevated my efficiency. Now, storing and accessing documents is effortless, ensuring I'm always prepared and in control.",
		image: (
			<Image
				src='/assets/images/abba.jpg'
				alt='connection'
				width={100}
				height={100}
				className='text-white text-3xl rounded-full'
			/>
		),
		bgColor: 'bg-[#00B2FF30]',
	},
	{
		name: 'Isabella Thompson',
		title: 'Property Manager',
		review:
			"Thanks to Realty Central's CRM system, my client interactions have reached new heights. Keeping track of customer interactions and tailoring property recommendations has boosted my client relationships and closed deals.",
		image: (
			<Image
				src='/assets/images/woman.jpg'
				alt='connection'
				width={100}
				height={100}
				className='text-white text-3xl rounded-full'
			/>
		),
		bgColor: 'bg-[#0038FF30]',
	},
	{
		name: 'Dr. Agrawal Patel',
		title: 'MD Reality Homes',
		review:
			'Realty Central Real-Time Reporting and Analytics have given me a competitive edge. The real-time insights and trend analysis have empowered me to make informed decisions that translate into increased profitability and business growth.',
		image: (
			<Image
				src='/assets/images/indian.jpg'
				alt='connection'
				width={100}
				height={100}
				className='text-white text-3xl rounded-full'
			/>
		),
		bgColor: 'bg-[#8F00FF30]',
	},
];

export default function Home() {
	return (
		<main className=''>
			{/* Hero Page Section */}
			<div className='bg-[#f5f5f5] min-h-[70vh]'>
				<FadeIn className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto p-4'>
					<div className='flex flex-col items-center md:items-start my-14 sm:my-24 md:my-32 space-y-5 max-w-sm lg:max-w-lg'>
						<div className='bg-[#52789544] py-1 px-5 rounded-xl'>
							<p className='pill'>Streamline Your Real Estate Workflow</p>
						</div>
						<h1 className='mainTitle'>Welcome to Realty Central</h1>
						<p className='text-sm text-center sm:text-left   lg:text-lg font-medium'>
							Learn how the Realty Central platform streamlines property
							management and improves client interaction.
						</p>
						<div className='flex items-center space-x-5'>
							<Button
								variant='outline'
								className='border-none px-5 font-semibold bg-transparent hover:bg-[#00336611]'
							>
								Learn More
							</Button>
							<Button
								variant='default'
								className='bg-primary-color px-5 hover:bg-blue-900'
							>
								Get Started
							</Button>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<Image
							src='/assets/images/rocket.png'
							alt='Man on a rocket'
							width={500}
							height={500}
						/>
					</div>
				</FadeIn>
			</div>

			{/* Why Choose Us Section */}
			<div className='min-h-[70vh] bg-gradient-to-r from-dark-primary  to-[#003366c4]'>
				<FadeIn className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto px-4 py-10 '>
					<div className='flex flex-col items-center md:items-start  my-14 space-y-5 max-w-full sm:max-w-sm '>
						<div className='bg-[#52789544] py-1 px-5 rounded-xl'>
							<p className='text-secondary-color text-sm   uppercase'>
								Why Choose Us
							</p>
						</div>
						<h1 className='font-inter text-2xl text-center sm:text-left md:text-3xl text-white font-bold'>
							Elevate Your Property Management{' '}
							<span className='text-secondary-color'>Experience</span>
						</h1>
						<p className='text-sm text-center sm:text-left   text-white font-medium'>
							Discover how Realty Central platform simplifies property
							management and enhances customer engagement.
						</p>
						<div className='flex items-center space-x-5'>
							<Button
								variant='default'
								className='bg-secondary-color px-7 hover:bg-teal-600'
							>
								Join Now
							</Button>
							<Button
								variant='outline'
								className='border-none px-5 font-semibold bg-transparent text-white hover:text-secondary-color hover:bg-transparent'
							>
								Learn More
							</Button>
						</div>
					</div>
					<div className='flex-1 self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-5'>
						{cards.map((card) => (
							<FadeIn
								key={card.title}
								className='bg-[#00336690] border-none shadow-md min-h-[350px] py-7 max-w-xs'
							>
								<FadeInStagger faster>
									<Card className='border-none bg-transparent shadow-none'>
										<FadeIn>
											<CardHeader>
												<div className='rounded-full bg-[#52789566] p-3 w-fit'>
													{card.icon}
												</div>
											</CardHeader>
										</FadeIn>
										<CardContent className='text-white space-y-4 text-lg'>
											<FadeIn>
												<h1 className='font-inter font-semibold max-w-[200px]'>
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
				</FadeIn>
			</div>

			{/* Our Features Section */}
			<div className='bg-white min-h-[70vh]'>
				<FadeIn>
					<div className='text-center max-w-xl mx-auto py-10 px-4 md:px-0 space-y-3'>
						<h1 className='font-inter text-2xl md:text-4xl text-primary-color font-bold'>
							Our Platform Features
						</h1>
						<p className='text-sm   font-medium'>
							Improve Your Real Estate Operations with These Essential Tools:
							Document Management, Outstanding CRM, and Real-Time Insights.
							Learn how these essential features can simplify procedures and
							guarantee your business&apos; success.
						</p>
					</div>
				</FadeIn>
				<div className='space-y-10 md:space-y-0'>
					{homeJumbotron.map((jumbotron) => (
						<Jumbotron
							key={jumbotron.title}
							jumbotron={jumbotron}
							className={
								jumbotron.flexDirection === 'row'
									? 'flex-row'
									: 'flex-row-reverse'
							}
						/>
					))}
				</div>
			</div>

			{/* Re Assurance Section / Join Us */}
			<div
				className='py-20 mt-10'
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/estate.jpg')`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					overflow: 'hidden',
				}}
			>
				<div className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto p-4'>
					<FadeIn className='text-center flex flex-col items-center justify-evenly text-white max-w-xl mx-auto py-10 space-y-10'>
						<div>
							<p className=' text-sm   uppercase'>What are you waiting for</p>
							<h1 className='font-inter text-2xl md:text-4xl font-bold'>
								Experience an enriched real estate journey with us.
							</h1>
						</div>
						<div className='flex items-center justify-center space-x-5 '>
							<Button
								variant='default'
								className='bg-white px-7 hover:bg-[#f5f5f5] text-black'
							>
								Join Now
							</Button>
							<Button
								variant='outline'
								className='border-none px-5 font-semibold bg-transparent text-white hover:text-secondary-color hover:bg-transparent'
							>
								Learn More
							</Button>
						</div>
					</FadeIn>
				</div>
			</div>

			{/* Customer Success Story */}
			<div className=' bg-gradient-to-r from-[#5250d122] via-[#f5f5f5c3] to-[#ffffffc4] min-h-[70vh] pb-10'>
				<div className='max-w-7xl flex flex-col mx-auto p-4 '>
					<FadeIn className='text-center p-4 mx-auto py-10 space-y-3 max-w-sm md:max-w-lg'>
						<h1 className='font-inter text-2xl md:text-4xl text-primary-color font-bold'>
							Our Customer’s Success is Our Success
						</h1>
						<p className='text-sm   font-medium'>
							At Realty Central, your triumph is our ultimate goal, and
							we&apos;re dedicated to providing you with unwavering support and
							innovative solutions every step of the way.
						</p>
					</FadeIn>

					<div className='self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 lg:gap-x-14 gap-y-5 ml-5'>
						{reviews.map((review) => (
							<FadeIn
								key={review.title}
								className={cn(
									'border-none shadow-md min-h-[350px] py-7 max-w-xs',
									review.bgColor
								)}
							>
								<FadeInStagger faster>
									<Card className='bg-transparent border-none shadow-none'>
										<FadeIn>
											<CardHeader>
												<div className='flex items-center space-x-3'>
													{review.image}
													<div className='text-sm'>
														<p className='font-semibold '>{review.name}</p>
														<p className='font-normal '>{review.title}</p>
														<div className='flex my-1'>
															<AiFillStar className='text-yellow-600' />
															<AiFillStar className='text-yellow-600' />
															<AiFillStar className='text-yellow-600' />
															<AiFillStar className='text-yellow-600' />
															<AiFillStar className='text-yellow-600' />
														</div>
													</div>
												</div>
											</CardHeader>
										</FadeIn>

										<FadeIn>
											<CardContent className='space-y-4 text-lg'>
												<p className='font-normal text-sm'>{review.review}</p>
											</CardContent>
										</FadeIn>
									</Card>
								</FadeInStagger>
							</FadeIn>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
