
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
    height: {type: String},
    gender: {type: String},
    movieCount: {type: Number}
}, {collection:"Actor", versionKey: false});

let ActorModel:any = mongoose.model("Actor", ActorSchema);

ActorModel.getAll = () => {
    return ActorModel.find({});
};

ActorModel.add = (actorToAdd) =>{
    let actor = actorToAdd.save().then(res=>{console.log("Actor saved successfully")}).catch(err => {
        console.log("Failed to save actor" + err);
    });
    return  actor;
};

ActorModel.delete = (actorId) => {
    ActorModel.deleteOne({id: actorId});
};

ActorModel.deleteByName = (actorName: string) => {
    try {
        console.log(`Try ro delete ' ${actorName}`);
        return ActorModel.deleteOne({name: actorName});
    }catch (e) {
        console.log(`error while tried to delete actor with name : '${actorName}'`);
    }
}
export default  ActorModel;
