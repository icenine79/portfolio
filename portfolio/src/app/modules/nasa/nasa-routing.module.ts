import { DayResolverService } from './services/resolvers/day-resolver.service';
import { PictureDetailComponent } from './components/picture-detail/picture-detail.component';
import { BaseNasaComponent } from './components/base-nasa/base-nasa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:BaseNasaComponent},
  {path:'picture-detail/:id', component: PictureDetailComponent, resolve:{detail:DayResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaRoutingModule { }
