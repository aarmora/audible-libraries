import { Component, OnInit } from '@angular/core';

import { BookService } from './services';
import { IBook } from "app/models/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public books: IBook[];
  public filterText = "";

  constructor(
    private bookService: BookService
  ) { }

  public ngOnInit() {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
        console.log("bookies", books);
      });
  }

}