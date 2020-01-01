import DbBook from "../../mongoose/schema/bookSchema";
import books from "../entitys/books";


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
        book.save((result, err) =>{
            if(err){
                console.log("query failed: " + err);
                return;
            }
            console.log("Entity saved: " + book);
        });
        return book;
    }

    static  async deleteBookByName(bookName: string){
        const deletedBook = await DbBook.deleteOne({name:bookName});
        console.log("Deleted book from db: " + deletedBook);
        return deletedBook;
    }

    static  async deleteBookbByAuthorId(authorId: number){
        const deletedBook = await DbBook.deleteMany({authorId: authorId});
        return deletedBook;
    }
}
