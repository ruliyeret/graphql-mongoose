import mongoose from 'mongoose'
import {Schema, Document} from "mongoose";

export interface IBook extends Document{
    name: string;
    ActorId: number;
}

    // id: {type: mongoose.Types.ObjectId},
const bookSchema = new Schema({
    name: { type: String},
    ActorId: {type: Number},

},{versionKey: false})

const DbBook = mongoose.model<IBook> ('Book', bookSchema);
export default DbBook;
