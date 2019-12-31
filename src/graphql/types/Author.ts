import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

const AuthorType = new GraphQLObjectType({
    name: "Author",
    description: "This is represent author of book",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        name: { type: GraphQLString}
    })
});

export default AuthorType;
