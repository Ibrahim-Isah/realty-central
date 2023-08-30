import React, { useState, useEffect } from 'react';

export function useScreenSize() {
	const [screenSize, setScreenSize] = useState('');

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 500) {
				setScreenSize('extra-small'); // small phones
			} else if (width < 768 && width > 500) {
				setScreenSize('small'); // Mobile screens
			} else if (width >= 768 && width < 1024) {
				setScreenSize('medium'); // Tablet screens
			} else {
				setScreenSize('large'); // Desktop screens
			}
		};

		handleResize(); // Initial setup

		window.addEventListener('resize', handleResize);

		// Clean up event listener
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return screenSize;
}
