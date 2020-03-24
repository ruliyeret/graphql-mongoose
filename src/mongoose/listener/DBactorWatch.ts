import ActorModule from "../models/actorModel";

export const DBActorListenr = () => {
    ActorModule.watch().on("changes", (data) =>{
        console.log("recognize insert into db: " + data.ns.db +
            " collection: " + data.ns.coll +
            " entity: " + JSON.stringify(data.fullDocument));
    });
};
