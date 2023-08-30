import { MetaMaskButtonProps } from './MetaMaskButton.props';
import styles from './MetaMaskButton.module.css';
import Metamask from './metamask.svg';
import { motion } from 'framer-motion';
import { AppState } from 'features/store/store';
import { useSelector } from 'react-redux';
import { metamaskWallet, useConnect } from "@thirdweb-dev/react";
import cn from 'classnames';

const metamaskConfig = metamaskWallet();


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

    const connect = useConnect();

    return (
        <motion.span className={cn(styles.exitButton, {
            [styles.darkThemeExitButton]: theme === 'dark',
        })} onClick={() => {
            connect(metamaskConfig);
        }}
            variants={variants}
            initial={!hiddenOptions ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            animate={!hiddenOptions ? 'visible' : 'hidden'}>
            <Metamask />
        </motion.span>
    );
};