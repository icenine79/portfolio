import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-base-movies',
  templateUrl: './base-movies.component.html',
  styleUrls: ['./base-movies.component.css']
})
export class BaseMoviesComponent implements OnInit {
movies:any[]
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

  }


  getMovies(title:string){
    this.movieService.getMovies(title)
    .subscribe(movie=>{
      this.movies=Array.of(movie);
    })
  }
}
