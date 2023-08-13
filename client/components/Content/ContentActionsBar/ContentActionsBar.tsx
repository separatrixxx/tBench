import { ContentActionsBarProps } from './ContentActionsBar.props';
import styles from './ContentActionsBar.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useRouter } from 'next/router';
import { setStat } from 'helpers/stat.helper';
import { useState } from 'react';
import Heart from './heart.svg';
import Comment from './comment.svg';
import { formatTime } from 'helpers/format.helper';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const ContentActionsBar = ({ postId, date, setType, setActive, setPostId }: ContentActionsBarProps): JSX.Element => {
    const router = useRouter();

    const theme = useSelector((state: AppState) => state.theme.theme);

    const [isLike, setIsLike] = useState<boolean>(false);

    return (
        <div className={cn(styles.contentActionsBar, {
            [styles.darkThemeContentActionsBar]: theme === 'dark',
        })}>
            <div className={styles.likesBlock}>
                <span className={cn(styles.like, {
                    [styles.darkThemeLike]: theme === 'dark',
                    [styles.likeActive]: isLike,
                })} onClick={() => setIsLike(!isLike)}>
                    <Heart />
                </span>
                <Htag tag='xs' className={cn(styles.contentActionsText, {
                    [styles.darkThemeContentActionsText]: theme === 'dark',
                })}>{setStat(3987)}</Htag>
            </div>
            <div className={styles.commentsBlock}>
                <span className={cn(styles.comment, {
                    [styles.darkThemeComment]: theme === 'dark',
                })} onClick={() => {
                    setType('comments');
                    setActive(true);
                    setPostId(postId);
                }}>
                    <Comment />
                </span>
                <Htag tag='xs' className={cn(styles.contentActionsText, {
                    [styles.darkThemeContentActionsText]: theme === 'dark',
                })}>{setStat(347)}</Htag>
            </div>
            <Htag tag='xs' className={cn(styles.contentActionsText, {
                [styles.darkThemeContentActionsText]: theme === 'dark',
            })}>{formatTime(date, router.locale)}</Htag>
        </div>
    );
};