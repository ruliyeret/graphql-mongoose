import express from "express";
import mongoose from "mongoose";
import rootSchema from "./graphql/schema/rootSchema";
import DbBook from "./mongoose/schema/bookSchema";
import {PubSub} from "graphql-subscriptions";
// @ts-ignore
import {ApolloServer} from 'apollo-server-express';
import * as http from "http";


export const pubsub = new PubSub();
const  connectDb = () => {
    let mongoAddress = "mongodb://localhost:27017/test";
    mongoose.connect(mongoAddress, {useNewUrlParser: true});
    let db = mongoose.connection;
    db.on("close", console.error.bind(console, "Failed to connect db " + mongoAddress));
    mongoose.connection.on('disconnected', connectDb);

    db.once('open', () =>{

        DbBook.watch().on('change', (data) =>{
            console.log("Recognize db changes " + data.operationType);
            let bookAdded = {name: "ruli", authorId: 2};
            pubsub.publish("addBook",bookAdded);
        })

    })

};
const PORT = 3001;
const app = express();



const server = new ApolloServer({schema:rootSchema});
server.applyMiddleware({ app });



const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
    console.log(server.subscriptionsPath)
        console.log(`🚀 Server ready at http://localhost:3000/graphql`);
            console.log(`🚀 Subscriptions ready at ws://localhost:3000/subscription`);
        connectDb();
    }
);


// app.use('/graphql', bodyParser.json(), graphqlExpress({
//     schema: rootSchema,
// }));
//
// app.use('/graphiql', graphiqlExpress({
//     endpointURL: '/graphql',
//     subscriptionsEndpoint: `ws://localhost:${4001}/subscriptions`
// }));

// Wrap the Express server
// const ws = createServer(app);
// ws.listen(PORT, () => {
//     console.log(`Apollo Server is now running on http://localhost:${PORT}`);
//     // Set up the WebSocket for handling GraphQL subscriptions
//     new SubscriptionServer({
//         execute: execute,
//         subscribe,
//         schema:rootSchema
//     }, {
//         server: ws,
//         path: '/subscriptions',
//     });
// });




app.use("/", async function(req, res){
    let a =  await DbBook.find({});
    res.send(a);
});


DbBook.watch().on("'change", (data) =>{
    console.log("recognize changes in db: " + data);
});
//
// app.listen(4000, () => {
//     connectDb();
//     // tslint:disable-next-line:no-console
//     console.log("sever running on port 4000");
// });
