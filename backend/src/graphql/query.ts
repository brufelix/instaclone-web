import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'
import { TUser, TToken, TDataSignin } from '../types/types'
import { ModelUser, ModelComment, ModelPost } from '../model/model' 
import KEY from '../../secret/secret'

export default {
    async user(_: undefined, { email }: TUser ) {
        const user: TUser = await ModelUser.findOne({email}, (err, res) => {
            if(err) throw new Error("User Invalid")
            return res
        })
        return user
    },
    async signin(_: undefined, { data }: TDataSignin) {
        const { email, password } = data

        let user: TUser = await ModelUser.findOne({ email }, (err, result) => {
            if(err) throw new Error("Email/password Invalid")
            return result 
        })

        if (user) {
            const valid: boolean = bcrypt.compareSync(password, user.password)
            const now: number = Math.floor(Date.now() / 1000) 
        
            if (valid){ 
                const infoUser: TToken = {
                    _id: user._id,
                    email: user.email,
                    iat: now,
                    exp: now + ( 3 * 24 * 60 * 60)
                } 
                return { valid: true, token: jwt.encode(infoUser, KEY) }
            } else {
                return { valid: false, token: ""}
            }
        } else {
            return { valid: false, token: ""}
        }
    },
    async getComments(_:undefined, { post_id }: {post_id: string}) {
        const comments = await ModelComment.find({ post_id }, (err, result) => {
            if (err) throw new Error("Error fetch comments")
            return result
        })

        return comments
    },
    async getPosts(_:undefined, {author_id}: {author_id: string}) {
        const posts = await ModelPost.find({ author_id }, (err, res) => {
            if (err) throw new Error("Error fetch Posts")
            return res
        })

        return posts
    }
}