import mongoose from 'mongoose'
import {Schema, Document} from "mongoose";

export interface IBook extends Document{
    id:number;
    name: string;
    authorId: number;
}

const bookSchema = new Schema({
    id: {type: mongoose.Types.ObjectId},
    name: { type: String},
    authorId: {type: mongoose.Types.ObjectId}
})

const DbBook = mongoose.model<IBook> ('Book', bookSchema);
export default DbBook;
