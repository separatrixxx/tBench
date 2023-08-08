import { NumberCounterProps } from './NumberCounter.props';
import styles from './NumberCounter.module.css';
import { useEffect, useState } from 'react';
import { useScrollY } from 'hooks/useScrollY';


export const NumberCounter = ({ id, number, time, step }: NumberCounterProps): JSX.Element => {
	const [e, setE] = useState<Element>();
	const [flag, setFlag] = useState<boolean>(false);

	const y = useScrollY();

	useEffect(() => {
		const e = document.querySelector("#" + id);

		if (e) {
			setE(e);

			if (e.getBoundingClientRect().top + 100 - window.innerHeight - y <= 0) {
				setFlag(true);
			}
		}
	}, [y, id]);

	let n = 0;
	const t = Math.round(time / (number / step));

	if (flag) {
		const interval = setInterval(() => {
			n = n + step;
			if (n == number) {
				clearInterval(interval);
			}

			if (e) {
				e.innerHTML = String(n);
			}
		}, t);
	}

	return (
		<div className={styles.counterWrapper}>
			<h1 id={id} className={styles.counter}>0</h1>
		</div>
	);
};