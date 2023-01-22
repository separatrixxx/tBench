import { InputProps } from './Input.props';
import styles from './Input.module.css';

export const Input = ({ type, text, value, onChange }: InputProps): JSX.Element => {
	switch (type) {
		case 'email':
			return <input className={styles.input}
                        placeholder={text}
						value={value}
						onChange={onChange}
                        type="email"
                        name="email" />;
		case 'password':
			return <input className={styles.input}
                        placeholder={text}
						value={value}
						onChange={onChange}
                        type="password"
                        name="password" />;
		case 'text':
			return <input className={styles.input}
                        placeholder={text}
						value={value}
						onChange={onChange}
                        type="text"
                        name="name" />;
		default:
			return <></>;
	}
};