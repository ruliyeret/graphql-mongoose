import mongoose from 'mongoose'
import {Schema, Document} from "mongoose";

export interface IBook extends Document{
    name: string;
    ActorId: number;
}

    // id: {type: mongoose.Types.ObjectId},
const bookModel = new Schema({
    name: { type: String},
    ActorId: {type: Number},

},{versionKey: false})

const DbBook = mongoose.model<IBook> ('Book', bookModel);
export default DbBook;
