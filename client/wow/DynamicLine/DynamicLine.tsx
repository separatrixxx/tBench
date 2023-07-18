import { DynamicLineProps } from './DynamicLine.props';
import styles from './DynamicLine.module.css';
import cn from 'classnames';


export const DynamicLine = ({ type, direction, speed, elements }: DynamicLineProps): JSX.Element => {
	const E0: any = elements[0];
	const E1: any = elements[1];
	const E2: any = elements[2];
	const E3: any = elements[3];
	const E4: any = elements[4];
	const E5: any = elements[5];
	const E6: any = elements[6];
	const E7: any = elements[7];
	const E8: any = elements[8];
	const E9: any = elements[9];
	const E10: any = elements[10];
	const E11: any = elements[11];

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
					<E10 />
					<E5 />
					<E8 />
					<E9 />
					<E7 />
					<E2 />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E3 />
					<E6 />
					<E11 />
					<E1 />
					<E4 />
					<E0 />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E10 />
					<E5 />
					<E8 />
					<E9 />
					<E7 />
					<E2 />
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
					<E4 />
					<E0 />
					<E11 />
					<E1 />
					<E3 />
					<E6 />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E8 />
					<E5 />
					<E7 />
					<E10 />
					<E2 />
					<E1 />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E4 />
					<E0 />
					<E11 />
					<E1 />
					<E3 />
					<E6 />
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
					<E2 />
					<E6 />
					<E5 />
					<E11 />
					<E3 />
					<E1 />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E0 />
					<E10 />
					<E8 />
					<E4 />
					<E7 />
					<E9 />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E2 />
					<E6 />
					<E5 />
					<E11 />
					<E3 />
					<E1 />
				</span>
			</div>
		);
	}
};