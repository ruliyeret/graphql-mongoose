import { GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import {RootBookQuery} from "../queries/rootBooksQueries";
import {RootAuthorQuery} from "../queries/rootAuthorQuiers";
import {RootAuthorMutation} from "../mutations/rootAuthorMutation";
import {RootBookMutation} from "../mutations/rootBookMutation";
import {RootBookSubscription} from "../subscriptions/bookSubscription";
import BookType from "../types/Books";


// TODO: to separate the queries to directory (book / author) and also the mutation types and
//  implement in RootQuery and RootMutation






const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: () => ({
        ...RootBookQuery,
        ...RootAuthorQuery
    })
});


const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation",
    fields: () => ({
        ...RootBookMutation,
        ...RootAuthorMutation
    })

});


const RootSubscriber = new GraphQLObjectType({
    name: "Subscriber",
    description:" Root subscriber",
    fields :() => ({
        ...RootBookSubscription
    })
});


const rootSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
    subscription: RootSubscriber
});

export default rootSchema;