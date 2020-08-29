import { Schema, model } from 'mongoose'
import { IUser, IPost, IComment } from './interface'

const schemaComment = new Schema({
    author: { type: String, required: true },
    comment: { type: String },
    likes: { type: Number },
    post_id: { type: String }
})

const schemaPost = new Schema({
    author_id: { type: String },
    image: { type: String },
    caption: { type: String },
    likes: { type: Number }
})

const schemaUser = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 }
})

const ModelUser = model<IUser>("users", schemaUser)
const ModelPost = model<IPost>("posts", schemaPost)
const ModelComment = model<IComment>("comments", schemaComment)

export { ModelUser, ModelPost, ModelComment }