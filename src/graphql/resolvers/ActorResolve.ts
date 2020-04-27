import ActorModule from "../../mongoose/models/actorModel";
import {Api} from "../../api/fetchActor";
import ActorModel from "../../mongoose/models/actorModel";

export default class ActorResolve {

    public static getActors(){

        return ActorModule.find({});
    }

    public static async getActorByName(name: string){
        let r = await ActorModule.findOne({name:name});
        console.log(r);
        return ActorModule.findOne({name:name});
    }
    public static getActorId(id){
        return ActorModule.find(Actor => Actor.id == id);
    }

    public static addActor(actor){
        const Actor = new ActorModule({
            actorId: actor.actorId,
            name: actor.name,
            height: actor.height,
            movieCount: actor.movieCount,
            gender: actor.gender});
        Actor.save(res =>console.log("Actor added: " + Actor));
        return Actor;
    }

    public static  async addActorFromApiByID(id){

        const actor = await Api.getActorById(id);
        if(actor){
            return await ActorModel.add(actor);
        }else {
            console.log("Cannot save actor by id");
        }
    }

    public static async deleteActorByName(name: string) {

        console.log(`Delete actor with name: '${name}'`);
        return await ActorModel.deleteByName(name);
    }
}