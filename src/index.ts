import express from "express";
import rootSchema from "./graphql/schema/rootSchema";
import {PubSub} from "graphql-subscriptions";
import {ApolloServer} from 'apollo-server-express';
import * as http from "http";
import cors from "cors";
import bodyParser = require("body-parser");
import ActorRouter from "./routes/actorRoute";
import {connectDb} from "./db/connect";

export const pubsub = new PubSub();

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
    res.send('Invalid endpoint!');
});


