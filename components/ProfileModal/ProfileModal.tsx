import { ProfileModalProps } from './ProfileModal.props'
import styles from './ProfileModal.module.css';
import { Modal } from 'components/Modal/Modal';
import { InputModal } from 'components/InputModal/InputModal';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useState } from 'react';


export const ProfileModal = ({ type, username, setUsername, userInfo, setUserInfo, 
    active, setActive }: ProfileModalProps): JSX.Element => {
    const router = useRouter();

    const [newUsername, setNewUsername] = useState<string>(username);
    const [newUserInfo, setNewUserInfo] = useState<string>(userInfo);

    const changeValue = (e: any) => {
		if (e.key == 'Enter') {
            if (type === 'username') {
                setUsername(newUsername);
            } else {
                setUserInfo(newUserInfo);
            }
			setActive(false);
		}
	};

    switch (type) {
		case 'username':
			return (
                <Modal active={active} setActive={setActive}>
                    <InputModal type='input' text={setLocale(router.locale).username} value={newUsername} 
                        onChange={(e) => setNewUsername(e.target.value)}
                        onKeyDown={changeValue} />
                </Modal>
            );
		case 'info':
			return (
                <Modal active={active} setActive={setActive}>
                    <InputModal type='area' text={setLocale(router.locale).user_info} value={newUserInfo} 
                        onChange={(e) => setNewUserInfo(e.target.value)}
                        onKeyDown={changeValue} />
                </Modal>
            );
		case 'more_info':
			return (
                <Modal active={active} setActive={setActive}>
                    
                </Modal>
            );
		default:
			return <></>;
	}
};