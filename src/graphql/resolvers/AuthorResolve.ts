import authors from "../entitys/authors";

export default class AuthorResolve {

    static getAuthors(){
        return authors;
    }
    static getAuthorId(id){
        return authors.find(author => author.id == id);
    }

    static addAuthor(authorId: number, name: string){
        const author = {id: authorId, name: name};
        this.getAuthors().push(author);
        return author;
    }
}