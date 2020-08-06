import { TUser, TSignin } from './types/types'
import Model from '../model/model' 
import bcrypt from 'bcrypt'

export default {
    user(_: undefined, args: TUser ) {
        return { name: "Bruno" }
    },
    async signin(_: undefined, { data }: TSignin) {
        const { email, password } = data

        let user: TUser | null = await Model.findOne({ email }, (err, result) => {
            if(err) throw new Error("Email/password Invalid")
            return result 
        })
        const valid: boolean = bcrypt.compareSync(password, user.password)
        if (valid){ 
            return { valid: true, token: "abc" }
        } else {
            return { valid: false, token: ""}
        }
    }
}