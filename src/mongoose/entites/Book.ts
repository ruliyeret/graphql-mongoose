class Book {

     private _id: number;
     private _name: string;
     private _authorId: number;

    constructor(id: number, name:string, authorId: number){
        this._id = id;
        this._name = name;
        this._authorId = authorId;
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

    get authorId(): number {
        return this._authorId;
    }

    set name(value: string) {
        this._name = value;
    }

    set authorId(value: number) {
        this._authorId = value;
    }

}