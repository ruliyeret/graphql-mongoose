import {pubsub} from "../../index";
import ActorType from "../types/Actor";
import {Topic} from "../../topics/topics";


export const RootActorSubscription = {

    addActor: {
        type: ActorType,
        subscribe: () =>{
            return pubsub.asyncIterator([Topic.addActorTopic]);
        }
    },
    deleteActor: {
        type: ActorType,
        subscribe: () => {
            return pubsub.asyncIterator([Topic.removeActorTopic])
        }
    }
};