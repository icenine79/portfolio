import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const movies = () => import('./modules/movies/movies.module').then(m=>m.MoviesModule)
const routes: Routes = [
  {path: '', component: ShellComponent,
children: [
  {path: 'home', component: HomeComponent},
  {path: 'movies', loadChildren: movies},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
