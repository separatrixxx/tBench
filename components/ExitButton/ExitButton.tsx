import { ExitButtonProps } from './ExitButton.props';
import styles from './ExitButton.module.css';
import { useRouter } from 'next/router';
import { IoExitOutline } from "react-icons/io5";
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';
import { motion } from 'framer-motion';


export const ExitButton = ({ hiddenOptions }: ExitButtonProps): JSX.Element => {
    const router = useRouter();
    const context = useContext(AppContext);

    const variants = {
		visible: {
            marginTop: '0',
            pointerEvents: 'all' as 'all',
            opacity: 1,
		},
		hidden: {
            marginTop: '-40px',
            pointerEvents: 'none' as 'none',
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
            <IoExitOutline />
        </motion.span>
    );
};