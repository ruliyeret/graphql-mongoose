import DbBook from "../../mongoose/models/bookModel";
import {pubsub} from "../../index";

export default class BookResolves {

    public static getBooks(){
        return DbBook.find({});
    }

     public static  async getSingleBook(id){
        return await DbBook.find({id: id});
    }

    public static addBook(name: string, ActorId: number){
        const book = new DbBook({name: name, ActorId: ActorId});
        console.log("Adding a book: " + book);
        // book.save((result) =>{
        //     if(result){
        //         pubsub.publish("newBook", {"addBook": book});
        //         console.log("Entity saved: " + book);
        //     }
        // });

        return book;
    }

    public static  async deleteBookByName(bookName: string){
        const deletedBook = await DbBook.deleteOne({name:bookName});
        console.log("Deleted book from db: " + deletedBook);
        return deletedBook;
    }

    public static  async deleteBookByActorId(ActorId: number){
        const deletedBook = await DbBook.deleteMany({ActorId: ActorId});
        return deletedBook;
    }
}
