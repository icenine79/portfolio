import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { BaseNewsComponent } from './components/base-news/base-news.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:BaseNewsComponent},
  {path:'news-detail/:id', component:NewsDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
