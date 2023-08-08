import { ToastError, ToastSuccess } from "components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";
import axios, { AxiosResponse } from "axios";
import { AuthDataInterface } from "interfaces/check_auth.interface";
import { hashPassword } from "./hash.helper";
import { User } from "interfaces/user.interface";


export async function loginUser(data: AuthDataInterface, router: any) {
    const { data: response }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/get_user?type=email&information=' + data.email);

    ToastSuccess(setLocale(router.locale).cool + '!');
    localStorage.setItem('logged_in', 'true');
    localStorage.setItem('username', response[0].username);
    router.push('/content');
}

export async function registerUser(data: AuthDataInterface, router: any) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/register', {
        name: data.firstName,
        surname: data.lastName,
        username: data.username,
        email: data.email,
        gender: data.gender,
        //password: hashPassword(data.password),
        password: data.password,
    })
        .then(function () {
            ToastSuccess(setLocale(router.locale).cool + '!');
            localStorage.setItem('logged_in', 'true');
            router.push('/content');
        })
        .catch(function (error) {
            console.log("Registration error: " + error);
            ToastError(String(error));
        });
}

export async function forgotPassword(data: AuthDataInterface, newPassword: string, router: any) {
    const { data: response }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/get_user?type=email&information=' + data.email);

    await axios.put(process.env.NEXT_PUBLIC_DOMAIN + '/update_user_password_with_code', {
        username: response[0].username,
        password: newPassword,
    })
        .then(function () {
            ToastSuccess(setLocale(router.locale).password_changed + '!');
        })
        .catch(function (error) {
            console.log("Change password error: " + error);
            ToastError(String(error));
        });
}