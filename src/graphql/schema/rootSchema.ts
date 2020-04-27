import { GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import {RootBookQuery} from "../queries/rootBooksQueries";
import {RootActorQuery} from "../queries/rootActorQuiers";
import {RootActorMutation} from "../mutations/rootActorMutation";
import {RootBookMutation} from "../mutations/rootBookMutation";
import {RootBookSubscription} from "../subscriptions/bookSubscription";
import {RootActorSubscription} from "../subscriptions/actorSubscription";


// TODO: to separate the queries to directory (book / Actor) and also the mutation types and
//  implement in RootQuery and RootMutation






const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: () => ({
        ...RootBookQuery,
        ...RootActorQuery
    })
});


const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation",
    fields: () => ({
        ...RootBookMutation,
        ...RootActorMutation
    })

});


const RootSubscriber = new GraphQLObjectType({
    name: "Subscriber",
    description:" Root subscriber",
    fields :() => ({
        ...RootBookSubscription,
        ...RootActorSubscription
    })
});


const rootSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
    subscription: RootSubscriber
});

export default rootSchema;