export interface signupPayload{
    name: string,
    email: string,
    password: string,
}

export interface loginPayload{
    email: string,
    password: string,
}

export interface forgottenPasswordPayload{
    email: string,
}

export interface resetPasswordPayload{
    token: string,
    password: string,
}