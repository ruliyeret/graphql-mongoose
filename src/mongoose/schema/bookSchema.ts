import mongoose from 'mongoose'
import {Schema, Document} from "mongoose";

export interface IBook extends Document{
    name: string;
    authorId: number;
}

    // id: {type: mongoose.Types.ObjectId},
const bookSchema = new Schema({
    name: { type: String},
    authorId: {type: Number},

},{versionKey: false})

const DbBook = mongoose.model<IBook> ('Book', bookSchema);
export default DbBook;
