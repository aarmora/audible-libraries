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
  public filter: string;

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

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.title.indexOf(filter.title) !== -1);
    }
}