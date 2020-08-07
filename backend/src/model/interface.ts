import { Document } from "mongoose"
import { TPost } from '../types/types'

interface IUser extends Document {
    _id: string
    name: string
    email: string
    password: string
    token?: string
    posts: TPost[]
}

interface IPost extends Document {
    author_id: string
    image: string    
    caption: string
    comments: string[]
    likes: number
}

export { IUser, IPost }