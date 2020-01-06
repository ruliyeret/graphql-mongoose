import DbBook from "../../mongoose/schema/bookSchema";
import {pubsub} from "../../index";
import BookType from "../types/Books";

export default class BookResolves {

    static getBooks(){
        return DbBook.find({});
    }

     static  async getSingleBook(id){
        return await DbBook.find({id: id});
    }

    static addBook(name: string, authorId: number){
        const book = new DbBook({name: name, authorId: authorId});
        console.log("Adding a book: " + book);
        pubsub.publish("newBook", {"addBook": book});
        book.save((result) =>{
            if(result){
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

    static  async deleteBookByAuthorId(authorId: number){
        const deletedBook = await DbBook.deleteMany({authorId: authorId});
        return deletedBook;
    }
}
