import Jumbotron from '@/components/Jumbotron';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { servicesJumbotron } from '@/lib/constants';
import Image from 'next/image';

const Services = () => {
	return (
		<main className='font-poppins'>
			<div className='bg-[#f5f5f5] min-h-[70vh]'>
				<FadeIn className='max-w-7xl flex flex-col sm:flex-row justify-between mx-auto p-4'>
					<div className='flex flex-col items-center md:items-start my-14 sm:my-24 md:my-32 space-y-5 max-w-sm lg:max-w-xl'>
						<div className='bg-[#52789544] py-1 px-5 rounded-xl'>
							<p className='pill'>Our Services</p>
						</div>
						<h1 className='text-2xl font-inter md:text-4xl lg:text-5xl text-center sm:text-left text-primary-color font-bold'>
							Empowering Your Real Estate Triumph Through Expert Services.
						</h1>
						<p className='text-sm text-center sm:text-left   lg:text-lg font-medium'>
							Step into a realm of real estate excellence. Explore our tailored
							services, meticulously designed to amplify your success.
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
							src='/assets/svg/standup.svg'
							alt='Stand-up Meeting'
							width={500}
							height={500}
						/>
					</div>
				</FadeIn>
			</div>
			<div
				className='min-h-[40vh] md:min-h-[60vh] bg-gradient-to-r from-dark-primary  to-[#003366c4]'
				style={{
					backgroundImage: "url('/assets/images/cherrydeck.jpg')",
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			/>
			<div className='bg-white min-h-[70vh]'>
				<div className='text-center max-w-xl mx-auto py-10 px-4 md:px-0 space-y-3'>
					<FadeIn>
						<h1 className='text-2xl font-inter md:text-4xl text-primary-color font-bold'>
							We Offer Best Service For Our Customers
						</h1>
					</FadeIn>
				</div>
				<div className='space-y-10 md:space-y-0'>
					{servicesJumbotron.map((jumbotron) => (
						<Jumbotron
							key={jumbotron.title}
							jumbotron={jumbotron}
							className={
								jumbotron.flexDirection === 'row'
									? 'flex-row'
									: 'flex-row-reverse'
							}
							width={jumbotron.width || undefined}
							height={jumbotron.height || undefined}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export default Services;
