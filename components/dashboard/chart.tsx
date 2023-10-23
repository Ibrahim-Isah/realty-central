'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatter } from '@/lib/utils';
import Link from 'next/link';
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai';
import { LuChevronRight } from 'react-icons/lu';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const data = [
	{
		name: 'Jan',
		expenses: 4000,
		income: 2400,
		amt: 2400,
	},
	{
		name: 'Feb',
		expenses: 3000,
		income: 1398,
		amt: 2210,
	},
	{
		name: 'Mar',
		expenses: 2000,
		income: 9800,
		amt: 2290,
	},
	{
		name: 'April',
		expenses: 2780,
		income: 3908,
		amt: 2000,
	},
	{
		name: 'May',
		expenses: 1890,
		income: 4800,
		amt: 2181,
	},
	{
		name: 'June',
		expenses: 2390,
		income: 3800,
		amt: 2500,
	},
	{
		name: 'July',
		expenses: 3490,
		income: 4300,
		amt: 2100,
	},
];

const Chart = () => {
	// calculate total profit
	let sumIncome = (data: any) => {
		let totalIncome = 0;
		for (let i = 0; i < data.length; i++) {
			totalIncome += data[i].income;
		}
		return totalIncome;
	};

	let sumExpenses = (data: any) => {
		let totalExpenses = 0;
		for (let i = 0; i < data.length; i++) {
			totalExpenses += data[i].expenses;
		}
		return totalExpenses;
	};

	return (
		<Card>
			<CardHeader>
				<div className='flex justify-between items-center'>
					<div className='font-semibold text-primary-color'>Overview</div>
					<Link href='/'>
						<div className='flex items-center text-secondary-color hover:text-dark-primary'>
							<p className='mr-1'>All Analytics</p>
							<LuChevronRight />
						</div>
					</Link>
				</div>
				<div className='my-5 flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center justify-evenly'>
					<div className='flex items-center'>
						<div className='bg-green-500 px-2 py-1 text-white rounded mr-2'>
							<AiOutlineRise />
						</div>
						<div>
							<h1 className='text-xl font-medium'>
								{formatter.format(sumIncome(data))}
							</h1>
							<h1 className='font-poppins text-[#737373] text-sm font-light'>
								Total Income
							</h1>
						</div>
					</div>
					<div className='flex items-center'>
						<div className='bg-red-500 px-2 py-1 text-white rounded mr-2'>
							<AiOutlineFall />
						</div>
						<div>
							<h1 className='text-xl font-medium'>
								{formatter.format(sumExpenses(data))}
							</h1>
							<h1 className='font-poppins text-[#737373] text-sm font-light'>
								Total Expenses
							</h1>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent className='p-0'>
				<ResponsiveContainer width={'100%'} aspect={2}>
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='income' fill='#22C55E' />
						<Bar dataKey='expenses' fill='#EF4040' />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
export default Chart;
