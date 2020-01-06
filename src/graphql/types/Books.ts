import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
const BookType : GraphQLObjectType = new GraphQLObjectType({
    name: "Book",
    description : "This represent book written by author",
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        authorId: {type: GraphQLInt}
    })
});

export default BookType;
