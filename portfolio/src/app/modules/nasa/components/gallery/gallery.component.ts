import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DayPicture } from '../../models/DayPicture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
@Input()   gallery:DayPicture[];
@Output() change=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  deleteImage(image){
    this.change.emit(image)
  }
}
