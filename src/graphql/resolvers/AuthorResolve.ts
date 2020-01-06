import DbAuthor from "../../mongoose/schema/authorSchema";

export default class AuthorResolve {

    static getAuthors(){

        return DbAuthor.find({});
    }
    static getAuthorId(id){
        return DbAuthor.find(author => author.id == id);
    }

    static addAuthor(authorId: number, name: string){
        const author = new DbAuthor({id: authorId, name: name});
        author.save(res =>console.log("author added: " + author)).
        catch(err => console.log("Failed to add mew author"));
        return author;
    }
}