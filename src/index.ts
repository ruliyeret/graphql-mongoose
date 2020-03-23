import express from "express";
import mongoose from "mongoose";
import rootSchema from "./graphql/schema/rootSchema";
import DbBook from "./mongoose/schema/bookSchema";
import {PubSub} from "graphql-subscriptions";
import {ApolloServer} from 'apollo-server-express';
import * as http from "http";
import { DBbookListenr} from "./mongoose/listener/DBbookWatch";
import {DBActorListenr} from "./mongoose/listener/DBActorWatch";


export const pubsub = new PubSub();
const  connectDb = () => {
    let mongoAddress = "mongodb://localhost:27017/test";
    mongoose.connect(mongoAddress, {useNewUrlParser: true});
    let db = mongoose.connection;
    db.on("close", console.error.bind(console, "Failed to connect db " + mongoAddress));
    mongoose.connection.on('disconnected', connectDb);

    db.once('open', () =>{
        console.log("mongo db started");
        DBbookListenr();
        DBActorListenr();
    });

};
const PORT = 3001;
const app = express();



const server = new ApolloServer({schema:rootSchema});
server.applyMiddleware({ app });



const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:3000/graphql`);
        console.log(`🚀 Subscriptions ready at ws://localhost:3000/subscription`);
        connectDb();
    }
);

app.use("/", async function(req, res){
    let a =  await DbBook.find({});
    res.send(a);
});
