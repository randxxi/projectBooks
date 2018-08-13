import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksListService } from '../../../books/services/list/books-list.service';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {

  @Input() book: any;

  constructor(private bookService: BooksListService) { }

  ngOnInit() {
  }



  similares(book: any) {
    this.bookService.searchBooks(book.volumeInfo.title, 0, 20);
  }

}