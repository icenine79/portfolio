import { MoviesRoutingModule } from './movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMoviesComponent } from './components/base-movies/base-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BaseMoviesComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MoviesModule { }
