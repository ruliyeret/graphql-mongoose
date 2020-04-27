import ActorModel from "../mongoose/models/actorModel";
import {Api} from "../api/fetchActor";
export class Controllers {

    public static  async getAllActors(req, res) {
        try {
            console.log("Got request to get all actor");
            let actors = await ActorModel.getAll();
            res.send(actors);
        }catch (err) {
            console.log("Got error in get all request")
            res.send("Got error in get all request");
        }
    }

    public static async removeActor(req, res) {
        console.log("Got request to get remove  an actor");
        const id  = req.data.body.id;

        try {
            const removeActor = await ActorModel.delete({id: id});
            res.send(removeActor);
        }catch (err) {
            res.send("cannot remove actor with id " + id);
        }
    }

    public static async addSingleActor(req, res) {
        console.log("Got request to add  actor");
        const actorID= req.body.id;
        const actor  = Api.getActorById(actorID);
        if(actor){
            console.log("try to save actor " + actor);
            try {
                    let actorSaved =  ActorModel.add(actor);
                     res.send(actorSaved);
            }catch (e) {
                    console.log("Failed to save actor to mongodb")
            }
        }
        res.send("Failed to add actor");
    }
}