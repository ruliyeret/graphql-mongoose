import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
const BookType : GraphQLObjectType = new GraphQLObjectType({
    name: "Book",
    description : "This represent book written by Actor",
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        ActorId: {type: GraphQLInt}
    })
});

export default BookType;
