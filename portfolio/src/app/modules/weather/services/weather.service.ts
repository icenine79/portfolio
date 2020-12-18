import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }



//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  getCurrentWeatherByCity(city:string){
     return this.http.get<any>("http://api.openweathermap.org/data/2.5/weather?q=" + city+ "&appid=af2a4270b528d547b8085a37a736b541");
  }

  getCities(){
    return this.http.get<any>('assets/jsons/capitals.json');

  }
}
