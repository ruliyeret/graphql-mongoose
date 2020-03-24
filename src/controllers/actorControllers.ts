import ActorModel from "../mongoose/models/actorModel";
import fetch from "node-fetch"
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
        console.log("Got request to get remove an actor");
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
        const url  = 'https://swapi.co/api/people/' +actorID;
        fetch(url)
            .then(response => {
                console.log("in the fetch method");
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(data => {
                console.log("Got the data from api");
                let actor = ActorModel({
                    actorId:data.id,
                    name: data.name,
                    height: data.height,
                    gender: data.gender,
                });
                try {
                    console.log("try to save actor " + actor)
                    let actorSaved =  ActorModel.add(actor);
                    res.send(actorSaved);
                }catch (e) {
                    res.send("Cannot save actor");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}