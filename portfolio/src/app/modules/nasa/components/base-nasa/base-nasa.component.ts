import { DayPicture } from './../../models/DayPicture';
import { NasaService } from './../../services/nasa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-nasa',
  templateUrl: './base-nasa.component.html',
  styleUrls: ['./base-nasa.component.css']
})
export class BaseNasaComponent implements OnInit{

  dayPicture: any
  gallery:DayPicture[];
  error:boolean=false;
  loading: boolean = true

  constructor(private nasaService:NasaService) { }

  ngOnInit(): void {
    this.nasaService.getDayPicture()
    .subscribe((dayPicture:any)=>{
      this.dayPicture=Array.of(dayPicture);
    },error=>{
      this.error=true;
    })
    this.nasaService.getImages();
    this.nasaService.getUpdatedImagesListner()
    .subscribe((response:DayPicture[])=>{
      this.gallery= response;
      console.log(this.gallery)
    });

  }
  saveImage(picture:any){
    this.nasaService.saveImage(picture)
  }
  onLoad() {
    this.loading = false;
}
  receivedImage(picture:any){
    this.nasaService.deleteImage(picture)
  }


}
