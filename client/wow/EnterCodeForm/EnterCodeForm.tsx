import styles from './EnterCodeForm.module.css';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { ToastSuccess } from 'components/Common/Toast/Toast';


export const EnterCodeForm = (): JSX.Element => {
    const [chars] = useState<string[]>(['', '', '', '', '', '']);

    const [error, setError] = useState<boolean>(false);

	const [char1, setChar1] = useState<any>();
	const [char2, setChar2] = useState<any>();
	const [char3, setChar3] = useState<any>();
	const [char4, setChar4] = useState<any>();

    useEffect(() => {
		setChar1(document.querySelector('#char1'));
        setChar2(document.querySelector('#char2'));
		setChar3(document.querySelector('#char3'));
		setChar4(document.querySelector('#char4'));
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

        if ((chars[0] + chars[1] + chars[2] + chars[3]).length === 4) {
            if (chars[0] + chars[1] + chars[2] + chars[3] === '1234') {
                ToastSuccess('Cool!');
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
                onKeyDown={(e: any) => keyDown(e, char4, char3, 3)} />
        </div>
    );
}