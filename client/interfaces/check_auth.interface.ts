export interface CheckAuthInterface {
    errEmail: boolean,
    errPassword: boolean,
    errConfirmPassword?: boolean,
    errFirstName?: boolean,
    errLastName?: boolean,
    errUsername?: boolean,
}

export interface AuthDataInterface {
    firstName?: string,
    lastName?: string,
    username?: string,
    email: string,
    password: string,
    confirmPassword?: string,
    gender?: string,
}

export interface LoginResponseInterface {
    data?: [boolean],
    error?: string,
    code: number,
    message: string,
}