import bcrypt from "bcrypt"
import jwt from 'jwt-simple'
import { TDataSignup, TDataPost, TDataComment, TUser, TToken } from "../types/types"
import { ModelUser, ModelPost, ModelComment } from '../model/model'
import KEY from '../../secret/secret'

export default {
    signup(_: undefined, { data }: TDataSignup) {
        const salt = bcrypt.genSaltSync()
        data.password = bcrypt.hashSync(data.password, salt)

        const newUser = new ModelUser({ ...data })
        newUser.save().catch(() => { throw new Error("Error ao Registrar Usuário.") })

        const now: number = Math.floor(Date.now() / 1000)

        const infoUser: TToken = {
            _id: newUser._id,
            email: newUser.email,
            iat: now,
            exp: now + (3 * 24 * 60 * 60)
        }
        return { valid: true, token: jwt.encode(infoUser, KEY) }
    },
    async addPost(_: undefined, { data, filter }: TDataPost) {
        const { email } = filter

        const user: TUser = await ModelUser.findOne({ email }, (err, res) => {
            if (err) throw new Error("User Invalid")
            return res
        })

        if (user) {
            const newPost = new ModelPost({ ...data, author_id: user._id, likes: 0 })
            newPost.save()
            return newPost
        } else {
            throw new Error("Error add post")
        }
    },
    addComment(_: undefined, { data }: TDataComment) {
        const newComment = new ModelComment({ ...data, likes: 0 })
        newComment.save()

        return newComment
    }
}