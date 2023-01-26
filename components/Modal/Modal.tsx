import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Modal = ({ active, setActive, children }: ModalProps): JSX.Element => {
    const variants = {
		visible: {
			opacity: 1,
		},
		hidden: { 
            opacity: 0,
        }
	};

	return (
        <motion.div className={cn(styles.modal, {
            [styles.active]: active,
        })} onClick={() => setActive(false)}
            variants={variants}
            initial={active ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
			animate={active ? 'visible' : 'hidden'}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </motion.div>
    );
};