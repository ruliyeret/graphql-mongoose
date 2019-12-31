import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import AuthorType from "./Author";
import authors from "../entitys/authors";

const BookType = new GraphQLObjectType({
    name: "Book",
    description : "This represent book written by author",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        name: { type: GraphQLString}
    })
});

export default BookType;
