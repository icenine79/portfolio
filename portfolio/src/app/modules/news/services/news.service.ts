import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }



getNewsBySource(source:string):Observable<any[]>{
  return this.http.get<any[]>('http://newsapi.org/v2/top-headlines?sources=' +source+'&apiKey=228d79e8e9024e758276b2656c22d928')
  .pipe(map(news=>{
    let x = news['articles']
    console.log(x)
    return x;
  }))
}

getCountries(): Observable<Country[]>{
  return this.http.get<Country[]>('assets/jsons/countries.json');
}

getSource(){
return this.http.get('https://newsapi.org/v2/sources?apiKey=228d79e8e9024e758276b2656c22d928')
.pipe(map(news=>{
  let x = news['sources']
  console.log(x)
  return x;
}))
}

}
