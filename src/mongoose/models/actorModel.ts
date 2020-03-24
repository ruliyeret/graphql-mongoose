
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
    actorId:{type: Number},
    name: {type:String},
    height: {type: Number},
    gender: {type: String},
}, {collection:"Actor", versionKey: false});

let ActorModel:any = mongoose.model("Actor", ActorSchema);

ActorModel['getAll'] = () => {
    return ActorModel.find({});
};

ActorModel['add'] = (actorToAdd) =>{
    let a  = actorToAdd.save().then(res=>{console.log("actor saved successfully")}).catch(err => {
        console.log(err)
    });
    return  a;
};

ActorModel['delete'] = (actorId) => {
    ActorModel.deleteOne({id: actorId});
};
export default  ActorModel;
