import { Component, Input, OnInit } from '@angular/core';
import { DayPicture } from '../../models/DayPicture';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
@Input() gallery:DayPicture[];

  constructor() { }

  ngOnInit(): void {
  }

}
