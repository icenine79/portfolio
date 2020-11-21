import { ShopModule } from './modules/shop/shop.module';
import { RegisterComponent } from './app-components/register/register.component';
import { LoginComponent } from './app-components/login/login.component';
import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const nasa = () => import('./modules/nasa/nasa.module').then(n=>n.NasaModule)
const movies = () => import('./modules/movies/movies.module').then(m=>m.MoviesModule);
const shop = () => import('./modules/shop/shop.module').then(s=>s.ShopModule)

const routes: Routes = [
  {path: '', component: ShellComponent,
children: [
  {path: 'home', component: HomeComponent},
  {path: 'movies', loadChildren: movies},
  {path: 'nasa', loadChildren: nasa},
  {path: 'shop', loadChildren: shop},

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
