import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DayPicture } from '../../models/DayPicture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
@Input()   gallery:DayPicture[];
@Output() change=new EventEmitter();
@Input()   loading: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
  onLoad() {
    this.loading = false;
}

  deleteImage(image){
    this.change.emit(image)
  }
}
