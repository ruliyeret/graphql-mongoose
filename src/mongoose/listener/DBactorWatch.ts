import DbAuthor from "../schema/authorSchema";

export const DBauthorListenr = () => {
    DbAuthor.watch().on("changes", (data) =>{
        console.log("recognize insert into db: " + data.ns.db +
            " collection: " + data.ns.coll +
            " entity: " + JSON.stringify(data.fullDocument));
    });
}
