import { GenderChangeProps } from './GenderChange.props';
import styles from './GenderChange.module.css';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import cn from 'classnames';


export const GenderChange = ({ gender, setGender }: GenderChangeProps): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.genderChangeBlock}>
			<Htag tag='s' className={cn({
				[styles.genderActive]: gender === 'male',
			})} onClick={() => setGender('male')}>{setLocale(router.locale).male}</Htag>
			<Htag tag='s' className={cn({
				[styles.genderActive]: gender === 'female',
			})} onClick={() => setGender('female')}>{setLocale(router.locale).female}</Htag>
			<Htag tag='s' className={cn({
				[styles.genderActive]: gender === 'unknown',
			})} onClick={() => setGender('unknown')}>{setLocale(router.locale).unknown}</Htag>
		</div>
	);
};