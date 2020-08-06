import Mongoose from "mongoose"

Mongoose.Promise = global.Promise
Mongoose.set("useCreateIndex", true)

let database: Mongoose.Connection

export default (): void => {
    const uri: string = "mongodb://localhost/instacloneweb"

    Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    
    if (database) { return }

    database = Mongoose.connection

    database.once("open", () => console.log("Connected to Database..."))
    database.on("error", () => console.log("Error with connection to database"))
}

export const disconnect = () => {
    if (!database) { return }

    Mongoose.disconnect()
}