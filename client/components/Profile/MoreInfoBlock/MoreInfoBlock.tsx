import styles from './MoreInfoBlock.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const MoreInfoBlock = (): JSX.Element => {
    const router = useRouter();

    const context = useContext(AppContext);

    return (
        <div className={styles.moreInfoBlock}>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: context.theme === 'dark',
            })}>
                {setLocale(router.locale).speciality}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: context.theme === 'dark',
            })}>Designer</Htag>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: context.theme === 'dark',
            })}>
                {setLocale(router.locale).city}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: context.theme === 'dark',
            })}>Moscow</Htag>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: context.theme === 'dark',
            })}>
                {setLocale(router.locale).birthday}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: context.theme === 'dark',
            })}>30.10.2003</Htag>
            <Htag tag='m' className={cn(styles.moreInfoAlias, {
                [styles.darkThemeMoreInfoAlias]: context.theme === 'dark',
            })}>
                {setLocale(router.locale).education}
            </Htag>
            <Htag tag='m' className={cn(styles.moreInfoText, {
                [styles.darkThemeMoreInfoText]: context.theme === 'dark',
            })}>MAI, CS</Htag>
        </div>
    );
};