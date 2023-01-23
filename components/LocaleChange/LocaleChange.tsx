import styles from './Htag.module.css';
import { setLocale } from 'helpers/helpers_locale';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';

export const LocaleChange = (): JSX.Element => {
    const router = useRouter();
	return (
        <div>
            <Htag tag='lang'>{setLocale(router.locale).language}</Htag>
        </div>
    );
};