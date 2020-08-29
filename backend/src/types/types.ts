type TDataSignup = {
    data: {
        name: string,
        email: string,
        password: string
    }
}

type TDataSignin = {
    data: {
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

type TDataComment = {
    data: {
        author: string
        comment: string
        post_id: string
    }
}

type TUser = {
    _id: string,
    name: string,
    email: string,
    password: string,
    bio: String,
    followers: Number,
    following: Number,
}

type TPost = {
    _id: string
    image: string
    caption: string
    comments: string[]
    likes: number
}

type TToken = {
    _id: string
    email: string
    iat: number
    exp: number
}

export { TUser, TToken, TPost, TDataSignup, TDataSignin, TDataPost, TDataComment }