export type TState = {
    email: string 
    password: string
}

export type TDataSignin = {
    signin: {
        token: string
        valid: boolean
    }
}