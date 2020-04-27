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
    AddActor: {
        type: ActorType,
        description: "Add a Actor",
        args: {
            actorId: { type: GraphQLNonNull(GraphQLInt)},
            name: {type : GraphQLNonNull(GraphQLString)},
            movieCount: {type:GraphQLInt},
            height:{type: GraphQLString},
            gender: {type: GraphQLString}
        },
        resolve: (parent, args) => {
            return  ActorResolve.addActor(args);
        }
    },
    addActorById: {
        type: ActorType,
        description:" Add Actor by id",
        args:{
            actorId: {type: GraphQLInt}
        },
        resolve: (parent, args) => {
            return ActorResolve.addActorFromApiByID(args.actorId);
        }

    },
    deleteActorByName: {
        type:ActorType,
        description: "Delete Actor by name",
        args: {
            name: {type:GraphQLString}
        },
        resolve:(parent, args) =>{
            return ActorResolve.deleteActorByName(args.name)
        }
    }
};