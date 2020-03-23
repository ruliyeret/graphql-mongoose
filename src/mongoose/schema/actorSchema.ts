
import * as mongoose from 'mongoose';
import {Document, Schema} from "mongoose";


export interface IActor extends Document{
    id: number;
    name: string;
    height: number;
    gender: string;
    movieCount: number;
}
const actorSchema =  new Schema({
    id: {type : Schema.Types.ObjectId, require: true},
    name: {type:String},
    height: {type: Number},
    gender: {type: String},
    movieCount: {type: Number}
}, {versionKey: false});

const DbActor = mongoose.model<IActor>("Actor", actorSchema);
export default  DbActor;
