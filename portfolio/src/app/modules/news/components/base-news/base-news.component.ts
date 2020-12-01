import { News } from './../../models/News';
import { Country } from './../../models/Country';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-news',
  templateUrl: './base-news.component.html',
  styleUrls: ['./base-news.component.css']
})
export class BaseNewsComponent implements OnInit {
countries:Country[]=[]
breakingNews:News[]=[]
newsBySource:any[]=[]
source:any[]
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getCountries()
    .subscribe((countries:Country[])=>{
      this.countries = countries
    });
    this.getSource();
  }
  searchNewsByCountry(country:string){
this.newsService.getNewsByCountry(country)
.subscribe((news: News[])=>{
  this.breakingNews=news;
})
  }
  getNewsBySource(source){
    this.newsService.getNewsBySource(source)
    .subscribe((news:any[])=>{
      this.newsBySource=news;
      console.log(news)

    })
  }
  getSource(){
    this.newsService.getSource()
    .subscribe(src=>{
      this.source=src
    })
  }
}
