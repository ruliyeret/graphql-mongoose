import express from "express";
import expressGraphQL from "express-graphql";

import rootSchema from "./graphql/schema/rootSchema";


const app = express();



// @ts-ignore
app.use("/graphql", expressGraphQL({
    schema: rootSchema,
    graphiql: true
    }
));

app.listen(4000, () => {
    // tslint:disable-next-line:no-console
    console.log("sever running");
});
