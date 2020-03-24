
import * as mongoose from 'mongoose';
import {Schema} from "mongoose";


export interface IActor extends Document{
    id: string;
    name: string;
    height: number;
    gender: string;
    movieCount: number;

}
const ActorSchema =  new Schema({
    id: {type : Schema.Types.ObjectId, require: true},
    name: {type:String},
    height: {type: Number},
    gender: {type: String},
    movieCount: {type: Number}
}, {collection:"Actor", versionKey: false});

let ActorModel:any = mongoose.model("Actor", ActorSchema);

ActorModel['getAll'] = () => {
    return ActorModel.find({});
}

ActorModel['add'] = (actorToAdd) =>{
    return actorToAdd.save();
}

ActorModel['delete'] = (actorId) => {
    ActorModel.deleteOne({id: actorId})
}
export default  ActorModel;
