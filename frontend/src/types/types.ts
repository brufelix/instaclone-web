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

export type TPropsSignup = {
    name: string
    email: string
    password: string
    setName: (event: React.ChangeEvent<HTMLInputElement>) => void
    setEmail: (event: React.ChangeEvent<HTMLInputElement>) => void
    setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void
    signup: () => void
}