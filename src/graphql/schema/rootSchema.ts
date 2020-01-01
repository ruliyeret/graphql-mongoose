import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import BookType from "../types/Books";
import BookResolves from "../resolvers/BookResolves";
import AuthorType from "../types/Author";
import AuthorResolve from "../resolvers/AuthorResolve";


// TODO: to separate the queries to directory (book / author) and also the mutation types and
//  implement in RootQuery and RootMutation
const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: () => ({
        books: {
            type: GraphQLList(BookType),
            description: "List of books.ts",
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
        },

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
    })
});

const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation",
    fields: () => ({
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
        deleteBookByAuthorId: {
            type: BookType,
            description: "Delete a book from db",
            args:{
                authorId: {type:GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                return BookResolves.deleteBookbByAuthorId(args.authorId)
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

    })

});


const rootSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

export default rootSchema;