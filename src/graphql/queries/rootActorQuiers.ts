import {GraphQLInt, GraphQLList} from "graphql";
import ActorType from "../types/Actor";
import ActorResolve from "../resolvers/ActorResolve";

export   const RootActorQuery = {
    Actors: {
        type: GraphQLList(ActorType),
        description: "List of all Actors",
        resolve:() => ActorResolve.getActors()
    },
    Actor: {
        type: ActorType,
        description: "Get specific Actor by id",
        args: {
            id: { type: GraphQLInt }
        },
        resolve: (parent, args)=> ActorResolve.getActorId(args.id)
    },
};
