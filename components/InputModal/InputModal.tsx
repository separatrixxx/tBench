import { InputModalProps } from './InputModal.props';
import styles from './InputModal.module.css';

export const InputModal = ({ type, text, value, onChange, onKeyDown }: InputModalProps): JSX.Element => {
	if (type === 'input') {
        return <input className={styles.inputModal}
            placeholder={text}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            type="email"
            name={text}
            aria-label={text} />;
    } else {
        return <textarea className={styles.areaModal}
            placeholder={text}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            name={text}
            aria-label={text} />;
    }
};