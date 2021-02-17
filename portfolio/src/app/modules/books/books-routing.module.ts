import { BookResolverService } from './resolver/book-resolver.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BaseBooksComponent } from './components/base-books/base-books.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: BaseBooksComponent},
  {path:'books-detail/:id', component: BookDetailComponent, resolve:{detail:BookResolverService}},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
