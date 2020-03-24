import ActorModule from "../../mongoose/models/actorModel";

export default class ActorResolve {

    public static getActors(){

        return ActorModule.find({});
    }
    public static getActorId(id){
        return ActorModule.find(Actor => Actor.id == id);
    }

    public static addActor(ActorId: number, name: string){
        const Actor = new ActorModule({id: ActorId, name: name});
        Actor.save(res =>console.log("Actor added: " + Actor)).
        catch(err => console.log("Failed to add mew Actor"));
        return Actor;
    }
}