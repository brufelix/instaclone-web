export type TState = {
    email: string 
    password: string
    name: string
    stage: boolean
}

export type TDataSignin = {
    signin: {
        token: string
        valid: boolean
    }
}