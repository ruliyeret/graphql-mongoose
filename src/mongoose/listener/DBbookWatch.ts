import DbBook from "../models/bookModel";
import {pubsub} from "../../index";

export const DBbookListenr = () =>{
    DbBook.watch().on("change", (data) =>{
            pubsub.publish("newBook ",{"addBook": data.fullDocument});
        console.log("recognize insert into db: " + data.ns.db +
            " collection: " + data.ns.coll +
            " entity: " + JSON.stringify(data.fullDocument));
    });
}