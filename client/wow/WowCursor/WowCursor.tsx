import styles from './WowCursor.module.css';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';


export const WowCursor = (): JSX.Element => {
	const [out, setOut] = useState<boolean>(true);
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		const body = document.getElementById('wrapper');
		const cursor = document.getElementById('cursor');
		const follower = document.getElementById('aura');

		body?.addEventListener('mousemove', e => {
			mouseCoords(e);
			setOut(false);
		});

		let mouseX = 0;
		let mouseY = 0;
		let posX = 0;
		let posY = 0;

		function mouseCoords(e: any) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		}

		gsap.to({}, 0.01, {
			repeat: -1,

			onRepeat: () => {
				posX += (mouseX - posX) / 5;
				posY += (mouseY - posY) / 5;

				gsap.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY,
					}
				});

				gsap.set(follower, {
					css: {
						left: posX - 20,
						top: posY - 20,
					}
				});

			}

		});

		body?.addEventListener('mouseout', () => {
			setOut(true);
		});
	}, []);

	const variantsCursor = {
		normal: {
			transform: 'scale(1)',
		},
		active: {
			transform: 'scale(0.0001)',
		},
	};

	const variantsAura = {
		normal: {
			transform: 'scale(1)',
			backdropFilter: 'blur(4px)',
		},
		active: {
			transform: 'scale(1.5)',
			backdropFilter: 'blur(0px)',
		},
		hidden: {
			transform: 'scale(0.0001)',
		},
	};

	return (
		<div id='wrapper' className={styles.cursorWrapper}>
			<motion.span id='cursor' className={styles.cursor}
				variants={variantsCursor}
				initial={active || out ? 'active' : 'normal'}
				transition={{ duration: 0.3 }}
				animate={active || out ? 'active' : 'normal'} />
			<motion.span id='aura' className={styles.aura}
				variants={variantsAura}
				initial={!out ? (active ? 'active' : 'normal') : 'hidden'}
				transition={{ duration: 0.3 }}
				animate={!out ? (active ? 'active' : 'normal') : 'hidden'} />
			<h1 className={styles.text}
				onMouseOver={() => setActive(true)}
				onMouseOut={() => setActive(false)}>WOW CURSOR</h1>
		</div>
	);
};