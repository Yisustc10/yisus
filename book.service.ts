import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    { id: 1, title: 'El Gran Gatsby', author: 'F. Scott Fitzgerald', description: 'Una historia sobre el sueño americano', price: 15.99 },
    { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', description: 'Una saga familiar en Macondo', price: 18.99 },
    { id: 3, title: '1984', author: 'George Orwell', description: 'Una distopía sobre el control gubernamental', price: 14.99 }
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }
}