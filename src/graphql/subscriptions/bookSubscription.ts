import BookType from "../types/Books";
import {pubsub} from "../../index";

const topic = "newBook";
export const RootBookSubscription = {
    addBook: {
        type: BookType,
        subscribe: () => {
            return pubsub.asyncIterator([topic]);
        }
    }
}