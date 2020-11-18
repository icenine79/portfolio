import { NasaService } from './../nasa.service';
import { NasaRoutingModule } from './../../nasa-routing.module';
import { DayPicture } from './../../models/DayPicture';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayResolverService implements Resolve<any>{

  constructor(private nasaService: NasaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
    return this.nasaService.getPictureById(route.paramMap.get('id'))
  }
}
