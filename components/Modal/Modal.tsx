import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import cn from 'classnames';

export const Modal = ({ active, setActive, children }: ModalProps): JSX.Element => {
	return (
        <div className={cn(styles.modal, {
            [styles.active]: active,
        })} onClick={() => setActive(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};