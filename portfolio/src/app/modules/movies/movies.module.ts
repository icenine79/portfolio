import { MoviesRoutingModule } from './movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMoviesComponent } from './components/base-movies/base-movies.component';



@NgModule({
  declarations: [BaseMoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
