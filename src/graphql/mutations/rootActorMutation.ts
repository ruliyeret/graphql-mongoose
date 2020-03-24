import BookType from "../types/Books";
import {GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";
import BookResolves from "../resolvers/BookResolves";
import ActorType from "../types/Actor";
import ActorResolve from "../resolvers/ActorResolve";

export const RootActorMutation = {

    deleteBookByActorId: {
        type: BookType,
        description: "Delete a book from db",
        args:{
            ActorId: {type:GraphQLNonNull(GraphQLInt)}
        },
        resolve: (parent, args) => {
            return BookResolves.deleteBookByActorId(args.ActorId);
        }
    },
    addActor: {
        type: ActorType,
        description: "Add a Actor of book",
        args: {
            id: { type: GraphQLNonNull(GraphQLInt)},
            name: {type : GraphQLNonNull(GraphQLString)}
        },
        resolve: (parent, args) => {
            return  ActorResolve.addActor(args.id, args.name);
        }
    }
};