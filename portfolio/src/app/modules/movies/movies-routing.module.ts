import { MovieResolverService } from './services/resolver/movie-resolver.service';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { BaseMoviesComponent } from './components/base-movies/base-movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: BaseMoviesComponent},
  {path:'movie-detail/:Title', component: MovieDetailComponent, resolve:{detail:MovieResolverService}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
