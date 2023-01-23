import { checkAuthInterface } from "interfaces/check_auth.interface";

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function checkAuth(authData: string[], si: boolean): checkAuthInterface {
    let checkAuth = {
        ok: false,
        errEmail: false,
        errPassword: false,
        errConfirmPassword: false,
        errFirstName: false,
        errLastName: false,
        errUsername: false,
    }
    
    if (!EMAIL_REGEXP.test(authData[0]) || authData[1].length < 8
        || authData[1] !== authData[2] || authData[3].length === 0 
        || authData[4].length === 0 || authData[5].length === 0) {
        if (!EMAIL_REGEXP.test(authData[0])) {
            checkAuth.errEmail = true;
        } 
        if (authData[1].length < 8) {
            checkAuth.errPassword = true;
        }
        if (authData[1] !== authData[2]) {
            checkAuth.errConfirmPassword = true;
        }
        if (authData[3].length === 0) {
            checkAuth.errFirstName = true;
        }
        if (authData[4].length === 0) {
            checkAuth.errLastName = true;
        }
        if (authData[5].length === 0) {
            checkAuth.errUsername = true;
        }
        if (si && EMAIL_REGEXP.test(authData[0]) && authData[1].length >= 8) {
            checkAuth.ok = true;
        }
    } else {
        checkAuth.ok = true;
    }
    
    return checkAuth;
}