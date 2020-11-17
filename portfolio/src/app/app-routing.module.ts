import { SignupComponent } from './app-components/signup/signup.component';
import { LoginComponent } from './app-components/login/login.component';
import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const nasa = () => import('./modules/nasa/nasa.module').then(nasa=>nasa.NasaModule);
const movies = () => import('./modules/movies/movies.module').then(movies=>movies.MoviesModule);

const routes: Routes = [
  {path:'', component: ShellComponent,
children:[
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path:'nasa', loadChildren: nasa},
  {path:'movies', loadChildren: movies}

]},
{path:'login', component: LoginComponent},
{path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
