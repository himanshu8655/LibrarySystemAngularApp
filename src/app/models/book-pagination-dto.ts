import { BookModel } from "./book-model";

export class BookPaginationDTO {
    constructor(){}
    content:BookModel[]=[]
    totalPages:number = 0
    totalElements:number = 0
    size: number = 0
    number:number = 0
}
