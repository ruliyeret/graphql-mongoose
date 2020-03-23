import DbActor from "../schema/ActorSchema";

export const DBActorListenr = () => {
    DbActor.watch().on("changes", (data) =>{
        console.log("recognize insert into db: " + data.ns.db +
            " collection: " + data.ns.coll +
            " entity: " + JSON.stringify(data.fullDocument));
    });
}