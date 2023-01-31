import { ToastSuccess } from "components/Toast/Toast";
import { checkAuthInterface } from "interfaces/check_auth.interface";
import { checkAuth } from "./check_auth.helper";

export async function checkUser(authData: Array<string>, errType: checkAuthInterface, router: any,  
    setError: (e: any) => void, setLoading: (e: any) => void, isLogin: boolean) {
    const checkResult = checkAuth(authData, isLogin, router.locale);

    if (!checkResult.ok) {
        setError(checkResult);
    } else {
        setError(errType);
        setLoading(true);
        ToastSuccess('Cool!');
        setTimeout(() => {
            setLoading(false);

            if (isLogin) {
                loginUser(authData, router);
            } else {
                registerUser(authData, router);
            }
        }, 1000);
    }
}

export async function loginUser(authData: Array<string>, router: any) {
    localStorage.setItem('logged_in', 'true');
    router.push('/content');
}

export async function registerUser(authData: Array<string>, router: any) {
    alert('register')
}