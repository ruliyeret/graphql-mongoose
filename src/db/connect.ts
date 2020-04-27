import mongoose from "mongoose";
import {DBActorListenr} from "../mongoose/listener/DBactorWatch";

export const  connectDb = () => {
    let mongoAddress = "mongodb://localhost:27017/?replicaSet=rs/test";
    try {
        mongoose.connect(mongoAddress, {useNewUrlParser: true,useUnifiedTopology: true });
        let db = mongoose.connection;
        db.on("close", console.error.bind(console, "Failed to connect db " + mongoAddress));
        mongoose.connection.on('disconnected', connectDb);

        db.once('open', () => {
            console.log("mongo db started");
            // DBbookListenr();
            // DBActorListenr();
        });
    }catch (e) {
        console.log("Failed to connect mongo");
    }

};