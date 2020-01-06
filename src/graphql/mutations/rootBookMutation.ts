import BookType from "../types/Books";
import {GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";
import BookResolves from "../resolvers/BookResolves";

export const RootBookMutation = {
    addBook: {
        type: BookType,
        description: "Add a book",
        args: {
            name: {type: GraphQLNonNull(GraphQLString)},
            authorId: { type: GraphQLNonNull(GraphQLInt)}
        },
        resolve: (parent, args) => {
            return BookResolves.addBook(args.name, args.authorId);
        }
    },
    deleteBookByName: {
        type: BookType,
        description: "Delete a book from db",
        args:{
            name: {type:GraphQLNonNull(GraphQLString)}
        },
        resolve: (parent, args) => {
            return BookResolves.deleteBookByName(args.name)
        }
    },
}