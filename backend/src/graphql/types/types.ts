type TUser = {
    _id: string,
    name: string,
    email: string,
    password: string,
    token?: string
}

type TSignup = {
    data: {
        name: string,
        email: string,
        password: string
    }
}

type TToken = {
    name: string
    email: string
    iat: number
    exp: number
}

type TSignin = {
    data: {
        email: string, 
        password: string
    }
}

export { TUser, TSignup, TSignin, TToken }