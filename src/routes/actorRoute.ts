import express from "express";
import {Controllers} from "../controllers/actorControllers";
const ActorRouter = express.Router();

ActorRouter.get('/allActor', (req, res) => {
    Controllers.getAllActors(req, res);
});

ActorRouter.post('/addActor', (req, res) => {
    Controllers.getAllActors(req, res);
});

ActorRouter.delete('/deleteActor', (req, res) => {
    Controllers.removeActor(req, res);
});

export default ActorRouter;