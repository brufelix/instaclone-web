export type TState = {
    email: string 
    password: string
    notice: string
}

export type TDataSignin = {
    signin: {
        token: string
        valid: boolean
    }
}