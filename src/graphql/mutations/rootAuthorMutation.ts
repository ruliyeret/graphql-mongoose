import BookType from "../types/Books";
import {GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";
import BookResolves from "../resolvers/BookResolves";
import AuthorType from "../types/Author";
import AuthorResolve from "../resolvers/AuthorResolve";

export const RootAuthorMutation = {

    deleteBookByAuthorId: {
        type: BookType,
        description: "Delete a book from db",
        args:{
            authorId: {type:GraphQLNonNull(GraphQLInt)}
        },
        resolve: (parent, args) => {
            return BookResolves.deleteBookByAuthorId(args.authorId)
        }
    },
    addAuthor: {
        type: AuthorType,
        description: "Add a author of book",
        args: {
            id: { type: GraphQLNonNull(GraphQLInt)},
            name: {type : GraphQLNonNull(GraphQLString)}
        },
        resolve: (parent, args) => {
            return  AuthorResolve.addAuthor(args.id, args.name);
        }
    }
}