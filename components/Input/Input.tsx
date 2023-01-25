import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ type, text, value, error, eye, onChange }: InputProps): JSX.Element => {
	switch (type) {
		case 'email':
			return <input className={cn({
						[styles.input]: !error,
						[styles.error_input]: error,
						[styles.eye_input]: eye,
					})}
                        placeholder={text}
						value={value}
						onChange={onChange}
                        type="email"
                        name="email" />;
		case 'password':
			return <input className={cn({
						[styles.input]: !error,
						[styles.error_input]: error,
						[styles.eye_input]: eye,
					})}
                        placeholder={text}
						value={value}
						onChange={onChange}
                        type="password"
                        name="password" />;
		case 'text':
			return <input className={cn({
						[styles.input]: !error,
						[styles.error_input]: error,
						[styles.eye_input]: eye,
					})}
                        placeholder={text}
						value={value}
						onChange={onChange}
                        type="text"
                        name="name" />;
		default:
			return <></>;
	}
};