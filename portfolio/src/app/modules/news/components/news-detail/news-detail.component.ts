import { News } from './../../models/News';
import { NewsService } from './../../services/news.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit, OnChanges {
@Input()selectedImage:News[];
  constructor(private router:Router, private newsService:NewsService) { }

ngOnChanges(){
}

  ngOnInit(): void {

  }
goBack(){
  this.router.navigate(['/home'])
}
}
