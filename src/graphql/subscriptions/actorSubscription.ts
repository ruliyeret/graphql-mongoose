import {pubsub} from "../../index";

const topic = "addActor";
export const ActorSubscription = {

    addActor: {
        type: ActorType,
        subscribe: () =>{
            return pubsub.asyncIterator([topic])
        }
    }
}