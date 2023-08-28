import React from 'react';
import { SignIn } from '@clerk/nextjs';

const Login = () => {
	return (
		<div className='mt-10 md:mt-auto'>
			<SignIn />
		</div>
	);
};

export default Login;
