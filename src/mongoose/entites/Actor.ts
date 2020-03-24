import ActorSchema from "../models/actorModel";

class Actor {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    set id(value: number) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }
    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
}

export default Actor;