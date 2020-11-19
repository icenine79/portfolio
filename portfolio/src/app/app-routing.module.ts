import { RegisterComponent } from './app-components/register/register.component';
import { LoginComponent } from './app-components/login/login.component';
import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const nasa = () => import('./modules/nasa/nasa.module').then(n=>n.NasaModule)

const movies = () => import('./modules/movies/movies.module').then(m=>m.MoviesModule)
const routes: Routes = [
  {path: '', component: ShellComponent,
children: [
  {path: 'home', component: HomeComponent},
  {path: 'movies', loadChildren: movies},
  {path: 'nasa', loadChildren: nasa},

  {path: '', redirectTo: 'home', pathMatch: 'full'}
]},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
