import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const Modal = ({ active, setActive, children }: ModalProps): JSX.Element => {
    const context = useContext(AppContext);

    const variants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        }
    };

    const variantsModal = {
        visible: {
            scale: 1,
        },
        hidden: {
            scale: 0.5,
        }
    };

    return (
        <div className={cn(styles.modal, {
            [styles.active]: active,
        })} onClick={() => setActive(false)}>
            <div className={cn(styles.modalContent, {
                [styles.darkThemeModalContent]: context.theme === 'dark',
            })} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};