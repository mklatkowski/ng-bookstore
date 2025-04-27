import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

const booksApiPrefix = '/api/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(booksApiPrefix);
  }
  findBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${booksApiPrefix}/${bookId}`);
  }
  saveBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${booksApiPrefix}/${book.id}`, book);
  }
}
