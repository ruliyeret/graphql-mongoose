import ActorModel from "../mongoose/models/actorModel";

export class Controllers {

    static  async getAllActors(req, res) {
        try {
            let actors = await ActorModel.getAll();
            res.send(actors);
        }catch (err) {
            res.send("Got error in get all request")
        }
    }

    static async removeActor(req, res) {
        const id  = req.data.body.id;
        try {
            const removeActor = await ActorModel.delete({id: id});
            res.send(removeActor)
        }catch (err) {
            res.send("cannot remove actor with id " + id);
        }
    }

    static async addASinglActor(req, res) {
        let actor = ActorModel({
            id: req.body.actor.id,
            name: req.body.actor.name,
            height: req.body.actor.height,
            gender: req.body.actor.gender,
            movieCount: req.body.actor.movieCount,
        });
        try {
            let actorSaved = actor.add(actor);
            res.send(actorSaved);
        }catch (e) {
            res.send("Cannot save actor");
        }
    }
}