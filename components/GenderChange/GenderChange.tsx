import { GenderChangeProps } from './GenderChange.props';
import styles from './GenderChange.module.css';
import { Htag } from 'components/Htag/Htag';
import cn from 'classnames';


export const GenderChange = ({ gender, setGender }: GenderChangeProps): JSX.Element => {
	return (
		<div className={styles.genderChangeBlock}>
			<Htag tag='m' className={cn({
				[styles.genderActive]: gender === 'male',
			})} onClick={() => setGender('male')}>Male</Htag>
			<Htag tag='m' className={cn({
				[styles.genderActive]: gender === 'female',
			})} onClick={() => setGender('female')}>Female</Htag>
			<Htag tag='m' className={cn({
				[styles.genderActive]: gender === 'unknown',
			})} onClick={() => setGender('unknown')}>Unknown</Htag>
		</div>
	);
};