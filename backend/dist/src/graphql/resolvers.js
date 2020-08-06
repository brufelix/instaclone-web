"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model/model"));
exports.default = {
    signup(_, args) {
        const newUser = new model_1.default({
            ...args
        });
        newUser.save();
        return newUser;
    }
};
