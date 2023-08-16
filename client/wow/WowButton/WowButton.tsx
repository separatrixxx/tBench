import styles from './WowButton.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Clouds1 from './clouds1.svg';
import Clouds2 from './clouds2.svg';
import Stars from './stars.svg';
import cn from 'classnames';


export const WowButton = (): JSX.Element => {
	const [on, setOn] = useState<boolean>(true);

	const variants = {
		on: {
			background: '#17b6ff',
		},
		off: {
			background: '#272a36',
		},
	};

	const variantsCircle = {
		sun: {
			transform: 'translateX(0%)',
			background: '#EDC92D',
		},
		moon: {
			transform: 'translateX(150px)',
			background: '#C5C9CE',
		},
	};

	const variantsClouds = {
		sun: {
			transform: 'translate(0%, 0%)',
		},
		moon: {
			transform: 'translate(50%, 50%)',
		},
	};

	const variantsStars = {
		sun: {
			transform: 'translate(-20%, -90%)',
		},
		moon: {
			transform: 'translate(0%, 0%)',
		},
	};

	const variantsCrater = {
		sun: {
			opacity: 0,
		},
		moon: {
			opacity: 1,
		},
	};

	return (
		<div className={styles.wrapper}>
			<motion.div className={cn(styles.buttonForm, {
				[styles.on]: on,
				[styles.off]: !on,
			})}
				variants={variants}
				initial={on ? 'on' : 'off'}
				transition={{ duration: 0.5 }}
				animate={on ? 'on' : 'off'}
				onClick={() => setOn(!on)}>
				<motion.span className={styles.clouds1}
					variants={variantsClouds}
					initial={on ? 'sun' : 'moon'}
					transition={{ duration: 0.4 }}
					animate={on ? 'sun' : 'moon'}>
					<Clouds1 />
				</motion.span>
				<motion.span className={styles.clouds2}
					variants={variantsClouds}
					initial={on ? 'sun' : 'moon'}
					transition={{ duration: 0.5 }}
					animate={on ? 'sun' : 'moon'}>
					<Clouds2 />
				</motion.span>
				<motion.span className={styles.stars}
					variants={variantsStars}
					initial={on ? 'sun' : 'moon'}
					transition={{ duration: 0.5 }}
					animate={on ? 'sun' : 'moon'}>
					<Stars />
				</motion.span>
				<motion.span className={cn(styles.circle, {
					[styles.sun]: on,
					[styles.moon]: !on,
				})}
					variants={variantsCircle}
					initial={on ? 'sun' : 'moon'}
					transition={{ duration: 0.3 }}
					animate={on ? 'sun' : 'moon'}>
					<motion.span className={styles.crater1}
						variants={variantsCrater}
						initial={on ? 'sun' : 'moon'}
						transition={{ duration: 0.3 }}
						animate={on ? 'sun' : 'moon'} />
					<motion.span className={styles.crater2}
						variants={variantsCrater}
						initial={on ? 'sun' : 'moon'}
						transition={{ duration: 0.3 }}
						animate={on ? 'sun' : 'moon'} />
					<motion.span className={styles.crater3}
						variants={variantsCrater}
						initial={on ? 'sun' : 'moon'}
						transition={{ duration: 0.3 }}
						animate={on ? 'sun' : 'moon'} />
					</motion.span>
			</motion.div>
		</div>
	);
};