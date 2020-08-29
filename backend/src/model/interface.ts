import { Document } from "mongoose"
import { TPost } from '../types/types'

interface IUser extends Document {
    _id: string
    name: string
    email: string
    password: string
    token?: string
    posts: TPost[]
    bio: string,
    followers: number,
    following: number 
}

interface IPost extends Document {
    author_id: string
    image: string    
    caption: string
    likes: number
}

interface IComment extends Document {
    author: string
    comment: string
    likes: number
    post_id: string
}

export { IUser, IPost, IComment }