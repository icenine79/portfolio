import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http:HttpClient) {  }

getCharacters(){
  return this.http.get<any>('https://swapi.dev/api/people')
  .pipe(map(res=>{
    let x = res['results']
    return x
  }))
}
}
