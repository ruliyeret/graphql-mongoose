import DbBook from "../../mongoose/schema/bookSchema";
import {pubsub} from "../../index";

export default class BookResolves {

    static getBooks(){
        return DbBook.find({});
    }

     static  async getSingleBook(id){
        return await DbBook.find({id: id});
    }

    static addBook(name: string, ActorId: number){
        const book = new DbBook({name: name, ActorId: ActorId});
        console.log("Adding a book: " + book);
        book.save((result) =>{
            if(result){
                pubsub.publish("newBook", {"addBook": book});
                console.log("Entity saved: " + book);
            }
        });

        return book;
    }

    static  async deleteBookByName(bookName: string){
        const deletedBook = await DbBook.deleteOne({name:bookName});
        console.log("Deleted book from db: " + deletedBook);
        return deletedBook;
    }

    static  async deleteBookByActorId(ActorId: number){
        const deletedBook = await DbBook.deleteMany({ActorId: ActorId});
        return deletedBook;
    }
}
