import {pubsub} from "../../index";
import ActorType from "../types/Actor";

const addActorTopic = "addActor";
const removeActorTopic = "removeActor";
export const RootActorSubscription = {

    addActor: {
        type: ActorType,
        subscribe: () =>{
            return pubsub.asyncIterator([addActorTopic]);
        }
    },
    deleteActor: {
        type: ActorType,
        subscribe: () => {
            return pubsub.asyncIterator([removeActorTopic])
        }
    }
};