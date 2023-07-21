import { ExitButtonProps } from './ExitButton.props';
import styles from './ExitButton.module.css';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import Exit from './exit.svg';
import { motion } from 'framer-motion';
import cn from 'classnames';


export const ExitButton = ({ hiddenOptions }: ExitButtonProps): JSX.Element => {
    const router = useRouter();
    const context = useContext(AppContext);

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
            [styles.darkThemeExitButton]: context.theme === 'dark',
        })} onClick={() => {
            router.push('/');
            localStorage.clear();
        }}
            variants={variants}
            initial={!hiddenOptions ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            animate={!hiddenOptions ? 'visible' : 'hidden'}>
            <Exit />
        </motion.span>
    );
};