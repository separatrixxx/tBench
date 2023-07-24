import { ToastSuccess } from "components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";
import axios from "axios";
import { AuthDataInterface } from "interfaces/check_auth.interface";


export function loginUser(data: AuthDataInterface, router: any) {
    ToastSuccess(setLocale(router.locale).cool + '!');
    localStorage.setItem('logged_in', 'true');
    router.push('/content');
}

export async function registerUser(data: AuthDataInterface, router: any) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/registration', {
        name: data.firstName,
        surname: data.lastName,
        username: data.username,
        email: data.email,
        gender: data.gender,
        password: data.password,
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

export async function forgotPassword(data: AuthDataInterface, newPassword: string, router: any) {
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