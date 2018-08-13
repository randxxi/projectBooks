import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routes } from "./routes.books";
import { BooksMainComponent } from "./containers/books-main/";
import { BookDetailComponent } from "./containers/book-detail/";
import { BookInfoComponent } from './components/book-info/book-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooksMainComponent, BookDetailComponent, BookInfoComponent]
})
export class BooksModule { }
