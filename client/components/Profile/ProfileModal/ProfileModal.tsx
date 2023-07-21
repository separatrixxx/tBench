import { ProfileModalProps } from './ProfileModal.props';
import styles from './ProfileModal.module.css';
import { Modal } from 'components/Common/Modal/Modal';
import { InputModal } from 'components/Inputs/InputModal/InputModal';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useState } from 'react';
import Plus from './plus.svg';
import { MoreInfoBlock } from '../MoreInfoBlock/MoreInfoBlock';
import { Htag } from 'components/Common/Htag/Htag';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import Check from './check.svg';
import cn from 'classnames';


export const ProfileModal = ({ type, username, setUsername, userInfo, setUserInfo,
    active, setActive }: ProfileModalProps): JSX.Element => {
    const router = useRouter();

    const context = useContext(AppContext);

    const [newUsername, setNewUsername] = useState<string>(username ? username : '');
    const [newUserInfo, setNewUserInfo] = useState<string>(userInfo ? userInfo : '');

    const changeValue = (e: any) => {
        if (e.key == 'Enter' && setUsername && setUserInfo) {
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
        case 'image':
            return (
                <Modal active={active} setActive={setActive}>
                    <div className={cn(styles.addImage, {
                        [styles.darkThemeAddImage]: context.theme === 'dark',
                    })}>
                        <Plus />
                    </div>
                </Modal>
            );
        case 'more_info':
            return (
                <Modal active={active} setActive={setActive}>
                    <MoreInfoBlock />
                </Modal>
            );
        case 'verify':
            return (
                <Modal active={active} setActive={setActive}>
                    <span className={styles.verify}><Check /></span>
                    <Htag tag='m' className={cn(styles.verifyText, {
                        [styles.darkThemeVerifyText]: context.theme === 'dark',
                    })}>{setLocale(router.locale).verify}</Htag>
                </Modal>
            );
        default:
            return <></>;
    }
};