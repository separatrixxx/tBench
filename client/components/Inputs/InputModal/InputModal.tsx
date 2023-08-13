import { InputModalProps } from './InputModal.props';
import styles from './InputModal.module.css';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const InputModal = ({ type, text, value, onChange, onKeyDown }: InputModalProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    if (type === 'input') {
        return <input className={cn(styles.inputModal, {
            [styles.darkThemeInputModal]: theme === 'dark',
        })}
            placeholder={text}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            type="email"
            name={text}
            aria-label={text} />;
    } else {
        return <textarea className={cn(styles.areaModal, {
            [styles.darkThemeAreaModal]: theme === 'dark',
        })}
            placeholder={text}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            name={text}
            aria-label={text} />;
    }
};