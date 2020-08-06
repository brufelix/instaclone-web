type TUser = {
    _id: string,
    name: string,
    email: string,
    password: string,
}

type TSignup = {
    data: {
        name: string,
        email: string,
        password: string
    }
}

export { TUser, TSignup }