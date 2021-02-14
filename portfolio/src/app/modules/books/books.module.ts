import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseBooksComponent } from './components/base-books/base-books.component';
import { BooksRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [BaseBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
