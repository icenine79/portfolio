import { Subject } from 'rxjs';
import { WeatherService } from './../../services/weather.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-base-weather',
  templateUrl: './base-weather.component.html',
  styleUrls: ['./base-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush})
export class BaseWeatherComponent implements OnInit {
weather:[]=[]
cities:[]=[]
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {

    //Cities
    this.weatherService.getCities()
    .subscribe(data=>{
      this.cities=data
      console.log(this.cities)
    })
    }

    getWeather(city:string){
      this.weatherService.getCurrentWeatherByCity(city)
      .subscribe(data=>{
       this.weather= data['weather'];
      })
    }


  }


