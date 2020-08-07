import { TDataSignup, TDataPost, TUser } from "../types/types"
import { ModelUser, ModelPost } from '../model/model'
import bcrypt from "bcrypt"

export default {
    signup(_: undefined, { data }: TDataSignup ) {
        const salt = bcrypt.genSaltSync()
        data.password = bcrypt.hashSync(data.password, salt)

        const newUser = new ModelUser({...data })
        newUser.save()
        return newUser
    },
    async addPost(_:undefined, {data, filter} : TDataPost) {
        const { email } = filter
        
        const user: TUser = await ModelUser.findOne({email}, (err, res) => {
            if(err) throw new Error("User Invalid")
            return res
        })

        if (user) {
            const newPost = new ModelPost({...data, author_id: user._id, comments: [], likes: 0 })
            newPost.save()
            return newPost
        } else {
            throw new Error("Error add post")
        }
    }
}