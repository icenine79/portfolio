import { HttpClient } from '@angular/common/http';
import { Book } from './../models/Book';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {

updatedBooks = new Subject<Book[]>()
books:Book[]=[]
  constructor(private http:HttpClient) { }



addBook(book:Book){
console.log(book)
this.http.post<{message:string, bookId:string, book:any}>('http://localhost:3000/api/books',book)
  .subscribe(response=>{
    const id = response.bookId;
    book.id=id
    this.books.push(book);
    this.updatedBooks.next([...this.books]);
    console.log(response.message);
    console.log(response.book);

  })
}

getBook(id:string){
  return this.http.get<{message, bookId:string}>('http://localhost:3000/api/books/'+id)
}

getBooks(){
  this.http.get<{message:string, books:any}>('http://localhost:3000/api/books')
  .pipe(map(response=>{
    return response.books.map(book=>{
      return {
        id: book._id,
        title: book.title,
        author: book.author,
        category:book.category
      }
    })

  })).subscribe(transformedData=>{
    this.books=transformedData;
    this.updatedBooks.next([...this.books])
  })
}


getUpdatedBooksListener(){return this.updatedBooks.asObservable();}

}
