
import * as mongoose from 'mongoose';
import {Document, Schema} from "mongoose";


export interface IAuthor extends Document{
    id: number;
    name: string;
}
const authorSchema =  new Schema({
    id: {type : Schema.Types.ObjectId, require: true},
    name: {type:String}
}, {versionKey: false});

const DbAuthor = mongoose.model<IAuthor>("Author", authorSchema);
export default  DbAuthor;
