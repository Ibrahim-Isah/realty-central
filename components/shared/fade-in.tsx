'use client';

import { createContext, useContext } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -200px' };

const FadeIn = (props: any) => {
	const shouldReduceMotion = useReducedMotion();
	const isInStaggerGroup = useContext(FadeInStaggerContext);
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ duration: 0.5 }}
			{...(isInStaggerGroup
				? {}
				: {
						initial: 'hidden',
						whileInView: 'visible',
						viewport,
				  })}
			{...props}
		/>
	);
};

export const FadeInStagger = ({ faster = false, ...props }) => {
	return (
		<FadeInStaggerContext.Provider value={true}>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={viewport}
				transition={{ staggerChildren: faster ? 0.15 : 0.3 }}
				{...props}
			/>
		</FadeInStaggerContext.Provider>
	);
};

export default FadeIn;
