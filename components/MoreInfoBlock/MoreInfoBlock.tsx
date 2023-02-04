import styles from './MoreInfoBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';

export const MoreInfoBlock = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.moreInfoBlock}>
                <Htag tag='m' className={styles.moreInfoAlias}>
                    {setLocale(router.locale).speciality}
                </Htag>
                <Htag tag='m' className={styles.moreInfoText}>Designer</Htag>
                <Htag tag='m' className={styles.moreInfoAlias}>
                    {setLocale(router.locale).city}
                </Htag>
                <Htag tag='m' className={styles.moreInfoText}>Moscow</Htag>
                <Htag tag='m' className={styles.moreInfoAlias}>
                    {setLocale(router.locale).birthday}
                </Htag>
                <Htag tag='m' className={styles.moreInfoText}>30.20.2003</Htag>
                <Htag tag='m' className={styles.moreInfoAlias}>
                    {setLocale(router.locale).education}
                </Htag>
                <Htag tag='m' className={styles.moreInfoText}>MAI, CS</Htag>
            </div>
    );
};