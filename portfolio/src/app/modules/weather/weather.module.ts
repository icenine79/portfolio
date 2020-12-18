import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseWeatherComponent } from './components/base-weather/base-weather.component';
import { WaetherRoutingModule } from './weather-routing.modules';



@NgModule({
  declarations: [BaseWeatherComponent],
  imports: [
    CommonModule,
    WaetherRoutingModule
  ]
})
export class WeatherModule { }
