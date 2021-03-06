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
newsBySource:any[]=[]
source:any[];
selectedImage:News[]=[];
detailFlag:boolean=false;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {

    this.getSource();
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
  getDetail(image){
    this.selectedImage.push(image);
    this.detailFlag=true;
  }
}
