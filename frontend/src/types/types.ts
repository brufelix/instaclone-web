export type TUser = {
    _id: string,
    name: string,
    bio: String,
    followers: Number,
    following: Number,
}

export type TDataSignin = {
    signin: {
        token: string
        valid: boolean
    }
}