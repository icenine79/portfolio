import { MovieService } from './../movie.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<any>{

  constructor(private movieService:MovieService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
    return this.movieService.getMovies(route.paramMap.get('Title'));

  }
}
