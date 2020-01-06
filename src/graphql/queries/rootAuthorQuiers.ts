import {GraphQLInt, GraphQLList} from "graphql";
import AuthorType from "../types/Author";
import AuthorResolve from "../resolvers/AuthorResolve";

export const RootAuthorQuery = {
    authors: {
        type: GraphQLList(AuthorType),
        description: "List of all authors",
        resolve:() => AuthorResolve.getAuthors()
    },
    author: {
        type: AuthorType,
        description: "Get specific author by id",
        args: {
            id: { type: GraphQLInt }
        },
        resolve: (parent, args)=> AuthorResolve.getAuthorId(args.id)
    },
};
