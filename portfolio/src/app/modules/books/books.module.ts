import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseBooksComponent } from './components/base-books/base-books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookDetailComponent } from './components/book-detail/book-detail.component';



@NgModule({
  declarations: [BaseBooksComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
