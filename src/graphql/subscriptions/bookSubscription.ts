// @ts-ignore
import BookType from "../types/Books";
import {pubsub} from "../../index";
import {GraphQLObjectType, GraphQLString} from "graphql";



// type BOOK = new GraphQLObjectType
// }

const topicInfo = "blabla";
const topic = "newBook";
export const RootBookSubscription = {
    addBook: {
        type: BookType,
        subscribe: () => {
            return pubsub.asyncIterator([topic] );
        }
    },
    blabla: {
        type: GraphQLString,
        subscribe: () =>{
            return pubsub.asyncIterator([topicInfo]);
        }
    }

}