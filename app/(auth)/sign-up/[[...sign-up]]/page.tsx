import React from 'react';
import { SignUp } from '@clerk/nextjs';

const Register = () => {
	return (
		<div className='mt-10 md:mt-auto'>
			<div className='md:mt-12'>
				<SignUp />
			</div>
		</div>
	);
};

export default Register;
