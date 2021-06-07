export type loginRequestType = {
    userName: string,
    password: string
}

export type registerRequestType = {
    userName: string,
    password: string
}

export type loginResponseSuccesType = {
    token: string
}