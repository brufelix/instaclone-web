import { Schema, model } from 'mongoose'
import { IUser } from './interface'

const schemaComment = new Schema({
    comment: {type: String},
    likes: {type: Number} 
})

const schemaPost = new Schema({
    image: {type: String},
    caption: {type: String},
    comments: [schemaComment],
    likes: {type: Number}
})

const schemaUser = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    post: [schemaPost],
    comments: [schemaComment]
}) 

export default model<IUser>("users", schemaUser)