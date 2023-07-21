import { ToastSuccess } from "components/Common/Toast/Toast";
import { CheckAuthInterface } from "interfaces/check_auth.interface";
import { checkAuth } from "./check_auth.helper";
import { setLocale } from "./locale.helper";
import axios from "axios";
import { emailSend } from './confirm_email.helper';


export async function checkUser(authData: Array<string>, errType: CheckAuthInterface, router: any,
    setError: (e: any) => void, isLogin: boolean, setAuthState: (e: any) => void, setLoading: (e: any) => void,
    isSend: boolean, setIsSend: (e: any) => void, setSecondsCount: (e: any) => void) {
    const checkResult = await checkAuth(authData, isLogin, router.locale)

    if (!checkResult.ok) {
        setError(checkResult);
    } else {
        if (!isSend) {
            emailSend(setIsSend, setSecondsCount, setAuthState, setLoading, authData[0]);
            setIsSend(true);
        } else {
            setAuthState('confirm');
        }

        setError(errType);
    }
}

export async function forgotPassword(newEmail: string, newPassword: string, router: any) {
    //нужно получение юзернейма
    await axios.put(process.env.NEXT_PUBLIC_DOMAIN + '/update_user_password_with_code', {
        username: '',
        password: newPassword,
    })
        .then(function () {
            ToastSuccess(setLocale(router.locale).password_changed + '!');
        })
        .catch(function (error) {
            console.log("Change password error: " + error);
        });
}


export function loginUser(authData: Array<string>, router: any) {
    ToastSuccess(setLocale(router.locale).cool + '!');
    localStorage.setItem('logged_in', 'true');
    router.push('/content');
}

export async function registerUser(authData: Array<string>, router: any) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/registration', {
        name: authData[3],
        surname: authData[4],
        username: authData[5],
        email: authData[0],
        gender: authData[6],
        password: authData[1],
    })
        .then(function () {
            ToastSuccess(setLocale(router.locale).cool + '!');
            localStorage.setItem('logged_in', 'true');
            router.push('/content');
        })
        .catch(function (error) {
            console.log("Registration error: " + error);
        });
}