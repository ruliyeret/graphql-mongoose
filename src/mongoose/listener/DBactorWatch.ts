import ActorModule from "../models/actorModel";
import {pubsub} from "../../index";
import {Topic} from "../../topics/topics";

export const DBActorListener = () => {

    const eventMap:Map<string, Function>  = new Map();


    const insertEvent = (actor) => {
        console.log("public insert new actor");

          pubsub.publish(Topic.addActorTopic,{"addActor": actor});
    };

    const deleteEvent = (actor) => {
        pubsub.publish(Topic.removeActorTopic, actor)
    }

    const initEventMap = () => {
        eventMap.set("insert", insertEvent);
        eventMap.set("delete", deleteEvent);
    }

    initEventMap();

    ActorModule.watch().on("change", (data) =>{
        if(eventMap.has(data.operationType)){
            eventMap.get(data.operationType).apply(this, [data.fullDocument])
        }

        console.log("recognize insert into db: " + data.ns.db +
            " collection: " + data.ns.coll +
            " entity: " + JSON.stringify(data.fullDocument));
    });
};
