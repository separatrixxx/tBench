import { ToastError, ToastSuccess } from "components/Common/Toast/Toast";
import { AuthDataInterface, CheckAuthInterface, LoginResponseInterface } from "interfaces/check_auth.interface";
import { setLocale } from "./locale.helper";
import axios, { AxiosResponse } from 'axios';
import { emailSend, timerStart } from "./confirm_email.helper";
import { hashPassword } from "./hash.helper";
import { User } from "interfaces/user.interface";


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const routes = ['404', '500', 'content', 'message', 'profile', 'wow'];

export async function checkAuth(data: AuthDataInterface, locale: string | undefined, setError: (e: any) => void,
    type: 'login' | 'registration' | 'forgot' | 'confirm', setLoading: (e: any) => void, setSecondsCount: (e: any) => void,
    setFormType: (e: any) => void, setConfCode: (e: any) => void) {
    let isOk: boolean = false;
    setLoading(true);

    if (type === 'login') {
        isOk = await checkLogin(data, locale, setError, setLoading);
    } else if (type === 'registration') {
        isOk = await checkRegistration(data, locale, setError, setLoading);
    } else if (type === 'forgot') {
        isOk = checkForgot(data, locale, setError, setLoading);
    }

    if (isOk) {
        timerStart(setSecondsCount);
        emailSend(setFormType, setLoading, setConfCode, data.email);
    }
}

export async function checkLogin(loginData: AuthDataInterface, locale: string | undefined,
    setError: (e: any) => void, setLoading: (e: any) => void): Promise<boolean> {
    const checkLogin: CheckAuthInterface = {
        errEmail: false,
        errPassword: false,
    };

    setError(checkLogin);

    if (EMAIL_REGEXP.test(loginData.email) && loginData.password.length >= 8 && loginData.password.length <= 32) {
        const { data: response }: AxiosResponse<LoginResponseInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/login?password=' + loginData.password + '&email=' + loginData.email);

        if (response.message === 'Choose correct username/password/password') {
            checkLogin.errPassword = true;
            { ToastError(setLocale(locale).password_does_not_match); }

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
        if (loginData.password.length < 8 || loginData.password.length > 32) {
            checkLogin.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }

        setLoading(false);
        return false;
    }
}

export async function checkRegistration(registrationData: AuthDataInterface, locale: string | undefined,
    setError: (e: any) => void, setLoading: (e: any) => void): Promise<boolean> {
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
    && registrationData.password.length <= 32 && registrationData.password === registrationData.confirmPassword
        && registrationData.firstName?.length && registrationData.lastName?.length
        && registrationData.username?.length && !routes.includes(registrationData.username)) {
        const { data: userByUsername }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_user?type=username&information=' + registrationData.username);

        const { data: userByEmail }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_user?type=email&information=' + registrationData.email);

        if (userByUsername.length === 0 && userByEmail.length === 0) {
            setLoading(false);

            return true;
        } else {
            if (userByUsername.length !== 0) {
                checkRegistration.errUsername = true;
                { ToastError(setLocale(locale).username_taken); }
            }

            if (userByEmail.length !== 0) {
                checkRegistration.errEmail = true;
                { ToastError(setLocale(locale).email_taken); }
            }

            setLoading(false);

            return false;
        }
    } else {
        if (!EMAIL_REGEXP.test(registrationData.email)) {
            checkRegistration.errEmail = true;
            { ToastError(setLocale(locale).error_email); }
        }
        if (registrationData.password.length < 8 || registrationData.password.length > 32) {
            checkRegistration.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }
        if (registrationData.password !== registrationData.confirmPassword) {
            checkRegistration.errConfirmPassword = true;
            { ToastError(setLocale(locale).error_confirm); }
        }
        if (registrationData.firstName && registrationData.firstName?.length < 3) {
            checkRegistration.errFirstName = true;
            {  ToastError(setLocale(locale).first_name); }
        }
        if (registrationData.lastName && registrationData.lastName?.length < 3) {
            checkRegistration.errLastName = true;
            {  ToastError(setLocale(locale).error_last_name); }
        }
        if (registrationData.username && registrationData.username?.length < 3) {
            checkRegistration.errUsername = true;
            { ToastError(setLocale(locale).error_username); }
        }
        if (registrationData.username?.length && routes.includes(registrationData.username)) {
            checkRegistration.errUsername = true;
            { ToastError(setLocale(locale).username_taken); }
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

    if (EMAIL_REGEXP.test(forgotData.email) && forgotData.password.length >= 8 && forgotData.password.length <= 32) {
        setLoading(false);
        return true;
    } else {
        if (!EMAIL_REGEXP.test(forgotData.email)) {
            checkForgot.errEmail = true;
            { ToastError(setLocale(locale).error_email); }
        }
        if (forgotData.password.length < 8 || forgotData.password.length > 32) {
            checkForgot.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }

        setLoading(false);
        return false;
    }
}