import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

const ActorType = new GraphQLObjectType({
    name: "Actor",
    description: "This is represent Actor of book",
    fields: () => ({
            actorId: { type: GraphQLInt},
            name: { type: GraphQLString},
            height:{type: GraphQLString},
            gender: {type: GraphQLString},
            movieCount: {type: GraphQLInt}
    })
});

export default ActorType;
