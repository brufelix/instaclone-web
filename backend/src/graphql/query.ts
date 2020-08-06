import { TUser } from './types/types'

export default {
    user(_: undefined, args: TUser ) {
        return { name: "Bruno" }
    }   
}