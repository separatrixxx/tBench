import { MetaMaskButtonProps } from './MetaMaskButton.props';
import styles from './MetaMaskButton.module.css';
import Metamask from './metamask.svg';
import { motion } from 'framer-motion';
import { AppState } from 'features/store/store';
import { useSelector } from 'react-redux';
import cn from 'classnames';


export const MetaMaskButton = ({ hiddenOptions }: MetaMaskButtonProps): JSX.Element => {
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
            alert('MetaMAsk!');
        }}
            variants={variants}
            initial={!hiddenOptions ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            animate={!hiddenOptions ? 'visible' : 'hidden'}>
            <Metamask />
        </motion.span>
    );
};