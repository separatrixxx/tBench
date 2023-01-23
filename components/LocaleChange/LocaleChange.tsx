import styles from './Htag.module.css';
import { setLocale } from 'helpers/helpers_locale';
import { Htag } from 'components/Htag/Htag';

export const LocaleChange = (): JSX.Element => {
	return (
        <div>
            <Htag tag='lang'>{setLocale().language}</Htag>
        </div>
    );
};