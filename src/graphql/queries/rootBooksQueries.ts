import {GraphQLInt, GraphQLList} from "graphql";
import BookType from "../types/Books";
import BookResolves from "../resolvers/BookResolves";

export const RootBookQuery = {
    books: {type: GraphQLList(BookType), description: "List of books",
        resolve: () => BookResolves.getBooks()
    },
    book: {
        type: BookType,
        description: "Get single book",
        args :{
            id:{
                type: GraphQLInt
            }
        },
        resolve: (_, args) => BookResolves.getSingleBook(args.id)
    }
};



