import { MaterialModule } from './../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNewsComponent } from './components/base-news/base-news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';



@NgModule({
  declarations: [BaseNewsComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MaterialModule
  ]
})
export class NewsModule { }
