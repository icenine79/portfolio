import { NasaRoutingModule } from './nasa-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNasaComponent } from './components/base-nasa/base-nasa.component';



@NgModule({
  declarations: [BaseNasaComponent],
  imports: [
    CommonModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }
