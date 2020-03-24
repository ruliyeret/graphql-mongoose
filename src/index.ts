import express from "express";
import mongoose from "mongoose";
import rootSchema from "./graphql/schema/rootSchema";
import DbBook from "./mongoose/models/bookModel";
import {PubSub} from "graphql-subscriptions";
import {ApolloServer} from 'apollo-server-express';
import * as http from "http";
import cors from "cors";
import bodyParser = require("body-parser");
import ActorRouter from "./routes/actorRoute";

export const pubsub = new PubSub();

const  connectDb = () => {
    let mongoAddress = "mongodb://localhost:27017/test";
    try {
        mongoose.connect(mongoAddress, {useNewUrlParser: true,useUnifiedTopology: true });
        let db = mongoose.connection;
        db.on("close", console.error.bind(console, "Failed to connect db " + mongoAddress));
        mongoose.connection.on('disconnected', connectDb);

        db.once('open', () => {
            console.log("mongo db started");
            // DBbookListenr();
            //  DBActorListenr();
        });
    }catch (e) {
        console.log("Failed to connect mongo");
    }

};
const PORT = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/actor', ActorRouter);

const server = new ApolloServer({schema:rootSchema});
server.applyMiddleware({ app });



const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:'${PORT}'/graphql`);
        console.log(`🚀 Subscriptions  ready at ws://localhost:'${PORT}'/subscription`);
         connectDb();
    }
);

app.use("/", async function(req, res){
    res.send("");
});


// const httpRequest = (url) =>{
//
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch.');
//             }
//             return response.json();
//         })
//         .then(data => {
//             return data;
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     return null;
// };

// app.use("/add/:id", async (req, res) => {
//     let id = req.params.id;
//     let result = httpRequest('https://swapi.co/api/people/' + id);
//      if(result) {
//          let a = new DbBook();
//          a.save();
//          // let actor =
//              // new ActorModule();
//
//
//          // actor.save();
//      }
// });

