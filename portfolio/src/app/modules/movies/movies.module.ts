import { SharedModule } from './../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMoviesComponent } from './components/base-movies/base-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [BaseMoviesComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MoviesModule { }
