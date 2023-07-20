import { InputModalProps } from './InputModal.props';
import styles from './InputModal.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const InputModal = ({ type, text, value, onChange, onKeyDown }: InputModalProps): JSX.Element => {
    const context = useContext(AppContext);

    if (type === 'input') {
        return <input className={cn(styles.inputModal, {
            [styles.darkThemeInputModal]: context.theme === 'dark',
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
            [styles.darkThemeAreaModal]: context.theme === 'dark',
        })}
            placeholder={text}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            name={text}
            aria-label={text} />;
    }
};