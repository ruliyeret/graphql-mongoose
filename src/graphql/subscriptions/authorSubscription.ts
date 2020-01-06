import AuthorType from "../types/Author";
import {pubsub} from "../../index";

const topic = "addAuthor";
export const AuthorSubscription = {

    addAuthor: {
        type: AuthorType,
        subscribe: () =>{
            return pubsub.asyncIterator([topic])
        }
    }
}