import styles from './WowCaptcha.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import cn from 'classnames';


export const WowCaptcha = (): JSX.Element => {
    type ElemType = {
        id: number,
        shape: 'square' | 'circle' | 'triangle',
        color: 'green' | 'blue' | 'red',
    }

    const elems: ElemType[] = [
        {
            id: 0,
            shape: 'square',
            color: 'green',
        },
        {
            id: 1,
            shape: 'circle',
            color: 'blue',
        },
        {
            id: 2,
            shape: 'triangle',
            color: 'red',
        },
    ];

    const num = Math.floor(Math.random() * 3);

    return (
        <div className={styles.wrapper} suppressHydrationWarning={true}>
            <Htag tag='l'>{elems[num].color + ' ' + elems[num].shape}</Htag>
            <div className={styles.elemsForm}>
                {elems.map(el => (
                    <div key={el.id} style={{ background: el.color }} className={cn(styles.elem, {
                        [styles.circle]: el.shape === 'circle',
                        [styles.triangle]: el.shape === 'triangle',
                    })} onClick={() => {
                        if (el === elems[num]) {
                            alert('gg');
                        } else {
                            alert('not gg');
                        }
                    }} />
                ))}
            </div>
        </div>
    );
}