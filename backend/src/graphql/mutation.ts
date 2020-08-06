import { TSignup } from "./types/types"
import Model from '../model/model'
import bcrypt from "bcrypt"

export default {
    signup(_: undefined, { data }: TSignup ) {
        const salt = bcrypt.genSaltSync()
        data.password = bcrypt.hashSync(data.password, salt)

        const newUser = new Model({
            ...data
        })
        newUser.save()
        return newUser
    }   
}