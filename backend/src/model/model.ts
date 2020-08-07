import { Schema, model } from 'mongoose'
import { IUser, IPost } from './interface'

const schemaComment = new Schema({
    author: {type: String, required: true },
    comment: {type: String},
    likes: {type: Number},
    post_id: { type: String }
})

const schemaPost = new Schema({
    author_id: {type:String},
    image: {type: String},
    caption: {type: String},
    comments: [schemaComment],
    likes: {type: Number}
})

const schemaUser = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}) 

const ModelUser = model<IUser>("users", schemaUser)  
const ModelPost = model<IPost>("posts", schemaPost)

 export { ModelUser, ModelPost }