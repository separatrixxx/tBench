import styles from './ContentActionsBar.module.css';
import { Htag } from 'components/Htag/Htag';
import { setStat } from 'helpers/stat.helper';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import Heart from './heart.svg';
import Comment from './comment.svg';
import cn from 'classnames';


export const ContentActionsBar = (): JSX.Element => {
    const context = useContext(AppContext);

    const [isLike, setIsLike] = useState<boolean>(false);

    return (
        <div className={cn(styles.contentActionsBar, {
            [styles.darkThemeContentActionsBar]: context.theme === 'dark',
        })}>
            <div className={styles.likesBlock}>
                <span className={cn(styles.like, {
                    [styles.darkThemeLike]: context.theme === 'dark',
                    [styles.likeActive]: isLike,
                })} onClick={() => setIsLike(!isLike)}>
                    <Heart />
                </span>
                <Htag tag='xs' className={cn(styles.contentActionsText, {
                    [styles.darkThemeContentActionsText]: context.theme === 'dark',
                })}>{setStat(3987)}</Htag>
            </div>
            <div className={styles.commentsBlock}>
                <span className={cn(styles.comment, {
                    [styles.darkThemeComment]: context.theme === 'dark',
                })}>
                    <Comment />
                </span>
                <Htag tag='xs' className={cn(styles.contentActionsText, {
                    [styles.darkThemeContentActionsText]: context.theme === 'dark',
                })}>{setStat(347)}</Htag>
            </div>
            <Htag tag='xs' className={cn(styles.contentActionsText, {
                [styles.darkThemeContentActionsText]: context.theme === 'dark',
            })}>07.11.22 at 23:57</Htag>
        </div>
    );
};