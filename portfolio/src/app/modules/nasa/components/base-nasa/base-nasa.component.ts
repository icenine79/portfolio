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
  constructor(private nasaService:NasaService) { }

  ngOnInit(): void {
    this.timer();
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
    this.nasaService.saveImage(picture);

  }
  deleteImage(id:string){
    this.nasaService.deleteImage(id)
  }
   timer(){
    let now= new Date();
   setInterval(function(){
    console.log('save')
   },1000)

}
}
