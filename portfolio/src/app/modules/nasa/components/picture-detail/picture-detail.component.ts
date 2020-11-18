import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DayPicture } from '../../models/DayPicture';

@Component({
  selector: 'app-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})
export class PictureDetailComponent implements OnInit {
picture:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
    .subscribe(picture=>{
     this.picture = Array.of(picture).map(d=>d['detail']['picture']);
     console.log(this.picture);
    });
  }

}
