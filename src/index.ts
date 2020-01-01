import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import rootSchema from "./graphql/schema/rootSchema";
import books from "./graphql/entitys/books";
import DbBook from "./mongoose/schema/bookSchema";


const  connectDb = () => {
    let mongoAddress = "mongodb://localhost:27017/test";
    mongoose.connect(mongoAddress, {useNewUrlParser: true});
    let db = mongoose.connection;
    db.on("close", console.error.bind(console, "Failed to connect db " + mongoAddress));
    mongoose.connection.on('disconnected', connectDb);

    db.once("open",() => {
        console.log("Successfully connected db");
    });
};
const app = express();

// @ts-ignore
app.use("/graphql", expressGraphQL({
    schema: rootSchema,
    graphiql: true
    }
));

app.use("/", async function(req, res){
    let a =  await DbBook.find({})
    res.send(a);
});


app.listen(4000, () => {
    connectDb();
    // tslint:disable-next-line:no-console
    console.log("sever running on port 4000");
});