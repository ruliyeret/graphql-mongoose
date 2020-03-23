class Book {

     private _id: number;
     private _name: string;
     private _ActorId: number;

    constructor(id: number, name:string, ActorId: number){
        this._id = id;
        this._name = name;
        this._ActorId = ActorId;
    }


    set id(value: number) {
        this._id = value;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get ActorId(): number {
        return this._ActorId;
    }

    set name(value: string) {
        this._name = value;
    }

    set ActorId(value: number) {
        this._ActorId = value;
    }

}