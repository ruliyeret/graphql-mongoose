import books from "../entitys/books";


export default class BookResolves {

    static getBooks(){
        return books;
    }

    static getSingleBook(id){
        return books.find(book => book.id == id);
    }

    static addBook(name: string, authorId: number){
        const book = {id: this.getBooks().length + 1, name: name, authorId: authorId};
        this.getBooks().push(book);
        return book;
    }
}
