import { BackButtonProps } from './BackButton.props';
import styles from './BackButton.module.css';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from "react-icons/io";
import { useResize } from 'hooks/useResize';


export const BackButton = ({ link }: BackButtonProps): JSX.Element => {
    const router = useRouter();

    let width = useResize();

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
        if (!xDown || ! yDown) {
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
        <div className={styles.backButton} onClick={() => {
            if (width > 1024) {
                router.push(link);
            }
        }} onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            <span className={styles.arrowBack}><IoIosArrowBack /></span>
            <div className={styles.blurBlock} />
        </div>
    );
};