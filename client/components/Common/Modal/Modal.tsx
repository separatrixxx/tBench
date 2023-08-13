import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const Modal = ({ active, setActive, children }: ModalProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

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
            transform: 'scale(1)',
        },
        hidden: {
            transform: 'scale(0.5)',
        }
    };

    return (
        <motion.div className={cn(styles.modal, {
            [styles.active]: active,
        })} onClick={() => setActive(false)}
            variants={variants}
            initial={active ? 'visible' : 'hidden'}
            transition={{ duration: 0.15 }}
            animate={active ? 'visible' : 'hidden'}>
            <motion.div className={cn(styles.modalContent, {
                [styles.darkThemeModalContent]: theme === 'dark',
            })} onClick={e => e.stopPropagation()}
                variants={variantsModal}
                initial={active ? 'visible' : 'hidden'}
                transition={{ duration: 0.15 }}
                animate={active ? 'visible' : 'hidden'}>
                {children}
            </motion.div>
        </motion.div>
    );
};