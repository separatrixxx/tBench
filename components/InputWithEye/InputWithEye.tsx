import { InputWithEyeProps } from './InputWithEye.props';
import styles from './InputWithEye.module.css';
import { BsEyeFill } from "react-icons/bs";

export const InputWithEye = ({ children, onClick, onMouseEnter, onMouseLeave }: InputWithEyeProps): JSX.Element => {
    return (
        <label className={styles.label}>
            <span className={styles.icon} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}>
                <BsEyeFill />
            </span>
            {children}
        </label>
    );
};