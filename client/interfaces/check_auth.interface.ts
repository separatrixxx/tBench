export interface CheckAuthInterface {
    ok: boolean,
    errEmail: boolean,
    errPassword: boolean,
    errConfirmPassword: boolean,
    errFirstName: boolean,
    errLastName: boolean,
    errUsername: boolean,
}

export interface LoginResponseInterface {
    data?: [boolean],
    error?: string,
    code: number,
    message: string,
}