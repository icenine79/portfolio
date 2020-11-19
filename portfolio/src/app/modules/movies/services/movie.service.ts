import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(name: string): Observable<any> {
    return this.http.get<any>("https://www.omdbapi.com/?t=" + name + "&plot=full&apikey=87c31e60");

  }
}
