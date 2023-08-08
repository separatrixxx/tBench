import { ConfirmEmailProps } from './ConfirmEmaIl.props';
import styles from './ConfirmEmail.module.css';
import { useEffect, useState } from 'react';
import { forgotPassword, loginUser, registerUser } from 'helpers/auth.helper';
import cn from 'classnames';


export const ConfirmEmail = ({ type, code, setAuthState, router, data, newPassword }: ConfirmEmailProps): JSX.Element => {
	const [chars] = useState<string[]>(['', '', '', '', '', '']);
	const [error, setError] = useState<boolean>(false);

	const [char1, setChar1] = useState<any>();
	const [char2, setChar2] = useState<any>();
	const [char3, setChar3] = useState<any>();
	const [char4, setChar4] = useState<any>();
	const [char5, setChar5] = useState<any>();
	const [char6, setChar6] = useState<any>();

    useEffect(() => {
		setChar1(document.querySelector('#char1'));
        setChar2(document.querySelector('#char2'));
		setChar3(document.querySelector('#char3'));
		setChar4(document.querySelector('#char4'));
		setChar5(document.querySelector('#char5'));
		setChar6(document.querySelector('#char6'));
	}, []);

    const keyDown = (e: any, char1: any, char2: any, pos: number) => {
		setError(false);
        if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 48 && e.keyCode <= 57)
            && e.keyCode !== 8 && e.keyCode !== 127) {
            chars[pos] = e.key;
            setTimeout(() => char1.focus(), 1);
        } else if (e.keyCode === 8 || e.keyCode === 127) {
            if (chars[pos] !== '') {
				chars[pos] = '';
			} else {
				setTimeout(() => char2.focus(), 1);
			}
        }

        if ((chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5]).length === 6) {
            if (chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] === code) {
				if (type === 'login') {
					loginUser(data, router);
					setAuthState('login');
				} else if (type === 'registration') {
					registerUser(data, router);
					setAuthState('registration');
				} else {
					forgotPassword(data, newPassword, router);
					setAuthState('login');
				}
			} else {
				setError(true);
			}
        }
	};

	return (
		<div className={styles.enterCodeForm}>
            <input id='char1' type="text" className={cn(styles.enterChar, {
                [styles.error]: error,
            })} maxLength={1}
                onKeyDown={(e: any) => keyDown(e, char2, char1, 0)} />
            <input id='char2' type="text" className={cn(styles.enterChar, {
                [styles.error]: error,
            })} maxLength={1}
                onKeyDown={(e: any) => keyDown(e, char3, char1, 1)} />
            <input id='char3' type="text" className={cn(styles.enterChar, {
                [styles.error]: error,
            })} maxLength={1}
                onKeyDown={(e: any) => keyDown(e, char4, char2, 2)} />
            <input id='char4' type="text" className={cn(styles.enterChar, {
                [styles.error]: error,
            })} maxLength={1}
                onKeyDown={(e: any) => keyDown(e, char5, char3, 3)} />
			<input id='char5' type="text" className={cn(styles.enterChar, {
                [styles.error]: error,
            })} maxLength={1}
                onKeyDown={(e: any) => keyDown(e, char6, char4, 4)} />
			<input id='char6' type="text" className={cn(styles.enterChar, {
                [styles.error]: error,
            })} maxLength={1}
                onKeyDown={(e: any) => keyDown(e, char6, char5, 5)} />
        </div>
	);
};