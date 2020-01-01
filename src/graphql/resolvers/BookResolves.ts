import DbBook from "../../mongoose/schema/bookSchema";


export default class BookResolves {

    static getBooks(){
        return DbBook.find({});
    }

     static  async getSingleBook(id){
        return await DbBook.find({id: id});
    }

    static addBook(name: string, authorId: number){
        const book = new DbBook({id: 3, name: name, authorId: authorId});
        book.save();
        return book;
    }
}
