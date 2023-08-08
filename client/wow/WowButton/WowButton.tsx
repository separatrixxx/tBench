import styles from './WowButton.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
			background: '#fff021',
		},
		moon: {
			transform: 'translateX(150px)',
			background: '#bfbfbf',
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
				transition={{ duration: 0.3 }}
				animate={on ? 'on' : 'off'}
				onClick={() => setOn(!on)}>
				<motion.span className={cn(styles.circle, {
					[styles.sun]: on,
					[styles.moon]: !on,
				})}
					variants={variantsCircle}
					initial={on ? 'sun' : 'moon'}
					transition={{ duration: 0.3 }}
					animate={on ? 'sun' : 'moon'} />
			</motion.div>
		</div>
	);
};