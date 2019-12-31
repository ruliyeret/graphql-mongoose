
import * as mongoose from 'mongoose';
import {Schema} from "mongoose";

const authorSchema =  new mongoose.Schema({
    id: {type : Schema.Types.ObjectId, require: true},
    name: {type:String}
});

const authorModel = mongoose.model("Author", authorSchema);
export default authorModel;
