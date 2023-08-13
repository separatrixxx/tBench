import { BackButtonProps } from './BackButton.props';
import styles from './BackButton.module.css';
import { useRouter } from 'next/router';
import { useResizeW } from 'hooks/useResize';
import BackArrow from './back_arrow.svg';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const BackButton = ({ link }: BackButtonProps): JSX.Element => {
    const router = useRouter();

    const theme = useSelector((state: AppState) => state.theme.theme);

    const width = useResizeW();

    let xDown: any = null;
    let yDown: any = null;

    function getTouches(evt: any) {
        return evt.touches || evt.originalEvent.touches;
    }

    function handleTouchStart(evt: any) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt: any) {
        if (!xDown || !yDown) {
            return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (!(Math.abs(xDiff) <= Math.abs(yDiff))) {
            if (!(xDiff >= 0)) {
                router.push(link);
            }
        }

        xDown = null;
        yDown = null;
    }

    return (
        <div className={cn(styles.backButton, {
            [styles.darkThemeBackButton]: theme === 'dark',
        })} onClick={() => {
            if (width > 1024) {
                router.push(link);
            }
        }} onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            <span className={cn(styles.arrowBack, {
                [styles.darkThemeArrowBack]: theme === 'dark',
            })}><BackArrow /></span>
            <div className={styles.blurBlock} />
        </div>
    );
};