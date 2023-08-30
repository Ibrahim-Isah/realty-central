import TooltipIcon from '@/components/tooltip-icon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';
import { LuChevronRight } from 'react-icons/lu';

const appointment = {
	date: new Date().toISOString(),
	title: 'Wuse 2 property negotiation',
	customer: 'John Doe',
};

const Appointments = () => {
	return (
		<Card>
			<CardHeader>
				<div className='flex justify-between items-center'>
					<div className='font-semibold text-primary-color'>
						Upcoming Appointments
					</div>
					<Link href='/'>
						<div className='flex items-center text-secondary-color hover:text-dark-primary'>
							<p className='mr-1'>View Appointments</p>
							<LuChevronRight />
						</div>
					</Link>
				</div>
			</CardHeader>
			<CardContent>
				<div className='mt-5'>
					{[1, 2, 3, 4, 5].map((app, _index, _array) => {
						return (
							<div className='my-2' key={app}>
								<div className='flex items-center space-x-2 space-y-2'>
									<div className='flex-1'>
										<h3 className='font-semibold font-inter'>
											{appointment.title}
										</h3>
										<p className='text-[#737373]'>
											Attendance:{' '}
											<span className='text-dark-primary font-medium'>
												{appointment.customer}
											</span>
										</p>
									</div>
									<Link href='/'>
										<TooltipIcon
											icon={<LuChevronRight />}
											tooltip='View Details'
										/>
									</Link>
								</div>
								<div className='my-2'>
									{_array.length - 1 !== _index && <Separator />}
								</div>
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
};

export default Appointments;
