import styles from './MoreInfoBlock.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const MoreInfoBlock = (): JSX.Element => {
    const router = useRouter();

    const theme = useSelector((state: AppState) => state.theme.theme);

    return (
        <div className={styles.moreInfoBlock}>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: theme === 'dark',
            })}>
                {setLocale(router.locale).speciality}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: theme === 'dark',
            })}>Designer</Htag>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: theme === 'dark',
            })}>
                {setLocale(router.locale).city}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: theme === 'dark',
            })}>Moscow</Htag>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: theme === 'dark',
            })}>
                {setLocale(router.locale).birthday}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: theme === 'dark',
            })}>30.10.2003</Htag>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: theme === 'dark',
            })}>
                {setLocale(router.locale).education}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: theme === 'dark',
            })}>MAI, CS</Htag>
        </div>
    );
};