import { ExitButtonProps } from './ExitButton.props';
import styles from './ExitButton.module.css';
import { useRouter } from 'next/router';
import Exit from './exit.svg';
import { motion } from 'framer-motion';
import { AppState } from '@/pages/store';
import { useSelector } from 'react-redux';
import cn from 'classnames';


export const ExitButton = ({ hiddenOptions }: ExitButtonProps): JSX.Element => {
    const router = useRouter();
    const theme = useSelector((state: AppState) => state.theme.theme);

    const variants = {
        visible: {
            marginTop: '0',
            pointerEvents: ("all" as React.CSSProperties["pointerEvents"]),
            opacity: 1,
        },
        hidden: {
            marginTop: '-40px',
            pointerEvents: ("none" as React.CSSProperties["pointerEvents"]),
            opacity: 0,
        }
    };

    return (
        <motion.span className={cn(styles.exitButton, {
            [styles.darkThemeExitButton]: theme === 'dark',
        })} onClick={() => {
            router.push('/');
            localStorage.removeItem('logged_in');
            localStorage.removeItem('username');
        }}
            variants={variants}
            initial={!hiddenOptions ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            animate={!hiddenOptions ? 'visible' : 'hidden'}>
            <Exit />
        </motion.span>
    );
};