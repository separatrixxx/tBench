import { LocaleChangeProps } from './LocaleChange.props';
import styles from './Htag.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/helpers_locale';
import { Htag } from 'components/Htag/Htag';

export const LocaleChange = ({ locale }: LocaleChangeProps): JSX.Element => {
	return (
        <div>
            <Htag tag='lang'>{setLocale(locale).language}</Htag>
        </div>
    );
};