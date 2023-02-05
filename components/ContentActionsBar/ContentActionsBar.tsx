import styles from './ContentActionsBar.module.css';
import { FaHeart, FaComment } from "react-icons/fa";
import { Htag } from 'components/Htag/Htag';
import { setStat } from 'helpers/stat.helper';
import { useState } from 'react';
import cn from 'classnames';

export const ContentActionsBar = (): JSX.Element => {
    const [isLike, setIsLike] = useState<boolean>(false);;

	return (
        <div className={styles.contentActionsBar}>
            <div className={styles.likesBlock}>
                <span className={cn(styles.like, {
                    [styles.likeActive]: isLike,
                })} onClick={() => setIsLike(!isLike)}>
                    <FaHeart />
                </span>
                <Htag tag='xs' className={styles.contentActionsText}>{setStat(3987)}</Htag>
            </div>
            <div className={styles.commentsBlock}>
                <span  className={styles.comment}>
                    <FaComment />
                </span>
                <Htag tag='xs' className={styles.contentActionsText}>{setStat(347)}</Htag>
            </div>
            <Htag tag='xs' className={styles.contentActionsText}>07.11.22 at 23:57</Htag>
        </div>
    );
};