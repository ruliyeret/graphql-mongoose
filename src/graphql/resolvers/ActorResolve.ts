import DbActor from "../../mongoose/schema/ActorSchema";

export default class ActorResolve {

    static getActors(){

        return DbActor.find({});
    }
    static getActorId(id){
        return DbActor.find(Actor => Actor.id == id);
    }

    static addActor(ActorId: number, name: string){
        const Actor = new DbActor({id: ActorId, name: name});
        Actor.save(res =>console.log("Actor added: " + Actor)).
        catch(err => console.log("Failed to add mew Actor"));
        return Actor;
    }
}