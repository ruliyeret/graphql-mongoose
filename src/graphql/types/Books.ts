import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import AuthorType from "./Author";
import authors from "../entitys/authors";

const BookType = new GraphQLObjectType({
    name: "Book",
    description : "This represent book written by autor",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        name: { type: GraphQLString},
        authorId: { type: GraphQLNonNull(GraphQLInt)},
        author: {
            type: AuthorType,
            resolve: (book) =>{
                return authors.find((author) => author.id == book.id)
            }
        }
    })
});

export default BookType;
