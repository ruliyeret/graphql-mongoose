import {pubsub} from "../../index";
import ActorType from "../types/Actor";

const topic = "addActor";
export const ActorSubscription = {

    addActor: {
        type: ActorType,
        subscribe: () =>{
            return pubsub.asyncIterator([topic])
        }
    }
}