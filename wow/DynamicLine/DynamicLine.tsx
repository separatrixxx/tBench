import { DynamicLineProps } from './DynamicLine.props';
import styles from './DynamicLine.module.css';
import Cocacola from './cocacola.svg';
import Facebook from './facebook.svg';
import Lenta from './lenta.svg';
import Megafon from './megafon.svg';
import Mts from './mts.svg';
import Netflix from './netflix.svg';
import Perekrestok from './perekrestok.svg';
import Rosbank from './rosbank.svg';
import Sber from './sber.svg';
import Visa from './visa.svg';
import Yandex from './yandex.svg';
import Yula from './yula.svg';
import cn from 'classnames';


export const DynamicLine = ({ type, direction, speed }: DynamicLineProps): JSX.Element => {
	if (type === '1') {
		return (
			<div className={styles.lineWrapper}>
				<span className={cn(styles.line, {
					[styles.right]: direction === 'right',
					[styles.left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Yandex />
					<Netflix />
					<Sber />
					<Visa />
					<Rosbank />
					<Lenta />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Megafon />
					<Perekrestok />
					<Yula />
					<Facebook />
					<Mts />
					<Cocacola />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Yandex />
					<Netflix />
					<Sber />
					<Visa />
					<Rosbank />
					<Lenta />
				</span>
			</div>
		);
	} else if (type === '2') {
		return (
			<div className={styles.lineWrapper}>
				<span className={cn(styles.line, {
					[styles.right]: direction === 'right',
					[styles.left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Mts />
					<Cocacola />
					<Yula />
					<Facebook />
					<Megafon />
					<Perekrestok />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Sber />
					<Netflix />
					<Rosbank />
					<Yandex />
					<Lenta />
					<Facebook />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Mts />
					<Cocacola />
					<Yula />
					<Facebook />
					<Megafon />
					<Perekrestok />
				</span>
			</div>
		);
	} else {
		return (
			<div className={styles.lineWrapper}>
				<span className={cn(styles.line, {
					[styles.right]: direction === 'right',
					[styles.left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Lenta />
					<Perekrestok />
					<Netflix />
					<Yula />
					<Megafon />
					<Facebook />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Cocacola />
					<Yandex />
					<Sber />
					<Mts />
					<Rosbank />
					<Visa />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<Lenta />
					<Perekrestok />
					<Netflix />
					<Yula />
					<Rosbank />
					<Facebook />
				</span>
			</div>
		);
	}
};