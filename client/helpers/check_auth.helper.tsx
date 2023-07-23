import { ToastError, ToastSuccess } from "components/Common/Toast/Toast";
import { AuthDataInterface, CheckAuthInterface, LoginResponseInterface } from "interfaces/check_auth.interface";
import { setLocale } from "./locale.helper";
import axios, { AxiosResponse } from 'axios';

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const routes = ['404', '500', 'content', 'message', 'profile', 'wow'];

export function checkLogin(loginData: AuthDataInterface, locale: string | undefined, setError: (e: any) => void) {
    const checkLogin: CheckAuthInterface = {
        errEmail: false,
        errPassword: false,
    };

    setError(checkLogin);

    if (EMAIL_REGEXP.test(loginData.email) && loginData.password.length >= 8) {
        { ToastSuccess(setLocale(locale).cool); }
    } else {
        if (!EMAIL_REGEXP.test(loginData.email)) {
            checkLogin.errEmail = true;
            { ToastError(setLocale(locale).error_email); }
        }
        if (loginData.password.length < 8) {
            checkLogin.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }
    }
}

export function checkRegistration(registrationData: AuthDataInterface, locale: string | undefined, setError: (e: any) => void) {
    const chackRegistration: CheckAuthInterface = {
        errFirstName: false,
        errLastName: false,
        errUsername: false,
        errEmail: false,
        errPassword: false,
        errConfirmPassword: false,
    };

    setError(checkLogin);


}

export async function checkAuth(authData: string[], si: boolean, locale: string | undefined): Promise<CheckAuthInterface> {
    const { data: response }: AxiosResponse<LoginResponseInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/login?password=' + authData[1] + '&email=' + authData[0]);

    console.log(response);

    const checkAuth = {
        ok: false,
        errEmail: false,
        errPassword: false,
        errConfirmPassword: false,
        errFirstName: false,
        errLastName: false,
        errUsername: false,
    };

    if (!EMAIL_REGEXP.test(authData[0]) || authData[1].length < 8
        || authData[1] !== authData[2] || authData[3].length === 0
        || authData[4].length === 0 || authData[5].length === 0
        || routes.includes(authData[5]) || response.message === 'Choose correct username/password/password') {
        if (authData[3].length === 0) {
            checkAuth.errFirstName = true;
        }
        if (authData[4].length === 0) {
            checkAuth.errLastName = true;
        }
        if (authData[5].length === 0 || routes.includes(authData[5])) {
            checkAuth.errUsername = true;
        }
        if ((authData[3].length === 0 || authData[4].length === 0 || authData[5].length === 0) && !si) {
            { ToastError(setLocale(locale).error_name); }
        }
        if (routes.includes(authData[5]) && authData[5].length !== 0 && !si) {
            { ToastError(setLocale(locale).error_username); }
        }
        if (!EMAIL_REGEXP.test(authData[0])) {
            checkAuth.errEmail = true;
            { ToastError(setLocale(locale).error_email); }
        }
        if (authData[1].length < 8) {
            checkAuth.errPassword = true;
            { ToastError(setLocale(locale).error_password); }
        }
        if (authData[1] !== authData[2]) {
            checkAuth.errConfirmPassword = true;
            if (!si) {
                { ToastError(setLocale(locale).error_confirm); }
            }
        }
        if (si && EMAIL_REGEXP.test(authData[0]) && authData[1].length >= 8 && response.error) {
            checkAuth.errPassword = true;
            { ToastError(setLocale(locale).incorrect_password); }
        }
        if (si && EMAIL_REGEXP.test(authData[0]) && authData[1].length >= 8 && !response.error) {
            checkAuth.ok = true;
        }
    } else {
        checkAuth.ok = true;
    }

    return checkAuth;
}