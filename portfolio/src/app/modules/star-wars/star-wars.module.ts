import { BaseSwComponent } from './components/base-sw/base-sw.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarWarsRoutingModule} from './star-wars.routing.module';


@NgModule({
  declarations: [BaseSwComponent],
  imports: [
    CommonModule,
    StarWarsRoutingModule
  ]
})
export class StarWarsModule { }
