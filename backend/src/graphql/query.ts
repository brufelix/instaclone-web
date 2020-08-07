import { TUser, TSignin, TToken } from './types/types'
import Model from '../model/model' 
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import KEY from '../../secret/secret'

export default {
    async user(_: undefined, args: TUser ) {
        const { email } = args
        const user: TUser | null = await Model.findOne({email}, (err, res) => {
            if(err) throw new Error("User Invalid")
            return res
        })
        return user
    },
    async signin(_: undefined, { data }: TSignin) {
        const { email, password } = data

        let user: TUser | null = await Model.findOne({ email }, (err, result) => {
            if(err) throw new Error("Email/password Invalid")
            return result 
        })

        if (user) {
            const valid: boolean = bcrypt.compareSync(password, user.password)
            const now: number = Math.floor(Date.now() / 1000) 
        
            if (valid){ 
                const infoUser: TToken = {
                    name: user.name,
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
    }
}