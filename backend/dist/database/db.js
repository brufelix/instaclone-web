"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.set("useCreateIndex", true);
let database;
exports.default = () => {
    const uri = "mongodb://localhost/instacloneweb";
    mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    if (database) {
        return;
    }
    database = mongoose_1.default.connection;
    database.once("open", () => console.log("Connected to Database..."));
    database.on("error", () => console.log("Error with connection to database"));
};
exports.disconnect = () => {
    if (!database) {
        return;
    }
    mongoose_1.default.disconnect();
};
