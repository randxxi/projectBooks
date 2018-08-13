import { Component, OnInit, Input} from '@angular/core';
//import { books } from "../../../data-books";
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../models';

@Component({
  selector: 'app-books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.css']
})
export class BooksMainComponent implements OnInit {

  booksList: BookList;
  @Input() book:any;

  constructor(private bookService: BooksListService) { 
      this.bookService.searchBooks('Colombia');    
  }

  ngOnInit() {  
    this.bookService.booksList
    .subscribe(
      books => {        
        if(books){
          if(this.book && this.book.id && books.items){ 
            let id_book =   this.book.id;             
            books.items = books.items.filter(item => id_book != item.id);
          } 
          this.booksList = books;
          this.book = null;
          
        }        
      }
    );
  }

  similares(book : any){
    this.bookService.searchBooks(book.volumeInfo.title, 0, 20);
  }

}
