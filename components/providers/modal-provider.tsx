'use client';

import { useState, useEffect } from 'react';
import CustomerModal from '../modals/customer-modal';
export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<CustomerModal />
		</>
	);
};
