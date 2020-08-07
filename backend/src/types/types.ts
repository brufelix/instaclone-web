type TDataSignup = {
    data: {
        name: string,
        email: string,
        password: string
    }
}

type TDataPost = {
    data: {
        image: string
        caption: string
    },
    filter: {
        email: string
    }
}

type TDataSignin = {
    data: {
        email: string, 
        password: string
    }
}

type TUser = {
    _id: string,
    name: string,
    email: string,
    password: string,
    token?: string
}

type TPost = {
    _id: string
    image: string
    caption: string
    comments: string[]
    likes: number
}

type TToken = {
    name: string
    email: string
    iat: number
    exp: number
}

export { TUser, TToken, TPost, TDataSignup, TDataSignin, TDataPost }