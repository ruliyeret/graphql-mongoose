import ActorModel from "../mongoose/models/actorModel";
import fetch from "node-fetch"
export class Api{

    static getActorById = async (actorId) =>{
        console.log("Got actor id " + actorId);
        const url  = 'https://swapi.co/api/people/' +actorId;
       let result =  await  fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log("Failed tp fetch");
                    return null;
                }
                return response.json();
            })
            .then(data => {
                console.log("Gor actor from api");
                let actor = ActorModel({
                    actorId:actorId,
                    name: data.name,
                    height: data.height,
                    gender: data.gender,
                });

                console.log("try to save actor " + actor);
                return actor;
            })
            .catch(err => {
                console.log(err);
                return null;
            });

        return result;
    }
}
