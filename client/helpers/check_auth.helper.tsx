import { ToastError, ToastSuccess } from "components/Common/Toast/Toast";
import { AuthDataInterface, CheckAuthInterface, LoginResponseInterface } from "interfaces/check_auth.interface";
import { setLocale } from "./locale.helper";
import axios, { AxiosResponse } from 'axios';
import { emailSend, timerStart } from "./confirm_email.helper";
import { hashPassword } from "./hash.helper";


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const routes = ['404', '500', 'content', 'message', 'profile', 'wow'];

export async function checkAuth(data: AuthDataInterface, locale: string | undefined, setError: (e: any) => void,
    type: 'login' | 'registration' | 'forgot' | 'confirm', setLoading: (e: any) => void, setSecondsCount: (e: any) => void,
    setAuthState: (e: any) => void, setConfCode: (e: any) => void) {
    let isOk: boolean = false;
    setLoading(true);

    if (type === 'login') {
        isOk = await checkLogin(data, locale, setError, setLoading);
    } else if (type === 'registration') {
        isOk = checkRegistration(data, locale, setError, setLoading);
    } else if (type === 'forgot') {
        isOk = checkForgot(data, locale, setError, setLoading);
    }

    if (isOk) {
        timerStart(setSecondsCount);
        emailSend(setAuthState, setLoading, setConfCode, data.email);
    }
}

export async function checkLogin(loginData: AuthDataInterface, locale: string | undefined,
    setError: (e: any) => void, setLoading: (e: any) => void): Promise<boolean> {
    const checkLogin: CheckAuthInterface = {
        errEmail: false,
        errPassword: false,
    };

    setError(checkLogin);

    if (EMAIL_REGEXP.test(loginData.email) && loginData.password.length >= 8) {
        const { data: response }: AxiosResponse<LoginResponseInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/login?password=' + hashPassword(loginData.password) + '&email=' + loginData.email);

        if (response.message === 'Choose correct username/password/password') {
            checkLogin.errPassword = true;
            { ToastError(setLocale(locale).error_password); }

            setLoading(false);
            return false;
        } else {
            setLoading(false);
            return true;
        }
    } else {
        if (!EMAIL_REGEXP.test(loginData.email)) {
            checkLogin.errEmail = true;
            { ToastError(setLocale(locale).error_email); }
        }
        if (loginData.password.length < 8) {
            checkLogin.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }

        setLoading(false);
        return false;
    }
}

export function checkRegistration(registrationData: AuthDataInterface, locale: string | undefined,
    setError: (e: any) => void, setLoading: (e: any) => void): boolean {
    const checkRegistration: CheckAuthInterface = {
        errFirstName: false,
        errLastName: false,
        errUsername: false,
        errEmail: false,
        errPassword: false,
        errConfirmPassword: false,
    };

    setError(checkRegistration);

    if (EMAIL_REGEXP.test(registrationData.email) && registrationData.password.length >= 8
    && registrationData.password === registrationData.confirmPassword
    && registrationData.firstName?.length && registrationData.lastName?.length
    && registrationData.username?.length && !routes.includes(registrationData.username)) {
        setLoading(false);
        return true;
    } else {
        if (!EMAIL_REGEXP.test(registrationData.email)) {
            checkRegistration.errEmail = true;
            { ToastError(setLocale(locale).error_email); }
        }
        if (registrationData.password.length < 8) {
            checkRegistration.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }
        if (registrationData.password !== registrationData.confirmPassword) {
            checkRegistration.errConfirmPassword = true;
            { ToastError(setLocale(locale).error_confirm); }
        }
        if (!registrationData.firstName?.length) {
            checkRegistration.errFirstName = true;
        }
        if (!registrationData.lastName?.length) {
            checkRegistration.errLastName = true;
        }
        if (!registrationData.username?.length) {
            checkRegistration.errUsername = true;
        }
        if (!registrationData.firstName?.length || !registrationData.lastName?.length
            || !registrationData.username?.length) {
                { ToastError(setLocale(locale).error_name); }
        }
        if (registrationData.username?.length && routes.includes(registrationData.username)) {
            checkRegistration.errUsername = true;
            { ToastError(setLocale(locale).error_username); }
        }

        setLoading(false);
        return false;
    }
}

export function checkForgot(forgotData: AuthDataInterface, locale: string | undefined,
    setError: (e: any) => void, setLoading: (e: any) => void): boolean {
    const checkForgot: CheckAuthInterface = {
        errEmail: false,
        errPassword: false,
    };

    setError(checkForgot);

    if (EMAIL_REGEXP.test(forgotData.email) && forgotData.password.length >= 8) {
        setLoading(false);
        return true;
    } else {
        if (!EMAIL_REGEXP.test(forgotData.email)) {
            checkForgot.errEmail = true;
            { ToastError(setLocale(locale).error_email); }
        }
        if (forgotData.password.length < 8) {
            checkForgot.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }

        setLoading(false);
        return false;
    }
}