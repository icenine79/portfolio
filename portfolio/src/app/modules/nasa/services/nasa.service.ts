import { environment } from './../../../../environments/environment';
import { DayPicture } from './../models/DayPicture';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
private images:DayPicture[]=[]
private updatedImages= new Subject<DayPicture[]>()
  constructor(private http: HttpClient) { }


  getDayPicture(): Observable<DayPicture[]> {
    return this.http.get<DayPicture[]>(environment.dayPicture);
  }

   getDetailPicture(title: any): Observable<any> {
    return this.http.get<any>(environment.dayPicture)
      .pipe(map(res => {

        let response = Array.of(res)
        if (response != null || undefined) {
          return response.filter(x => x.title === title)
        }
      }));
  }
//Node Backend

getPictureById(id:string):Observable<any>{
  console.log(id)
  return this.http.get<{id:string, message:string, picture:any}>('http://localhost:3000/api/nasa/' + id);
}


getUpdatedImagesListner(){
  return this.updatedImages.asObservable();
}

getImages(){
  this.http.get<{message:string, pictures: any}>('http://localhost:3000/api/nasa')
  .pipe(map((picsData)=>{
   return picsData.pictures.map(picture=>{
     return {
       id: picture._id,
       date: picture.date,
       explanation: picture.explanation,
       hdurl: picture.hdurl,
       title: picture.title
     }
   });
 }))
 .subscribe(transformedData=>{
  this.images = transformedData
  this.updatedImages.next([...this.images])
})
}
saveImage(pictureObject:DayPicture){
  this.http.post<{ message: string, picId:string}>('http://localhost:3000/api/nasa', pictureObject)
.subscribe(responseData=>{
  const id = responseData.picId;
  pictureObject.id = id; //transforma o _id mongo no id front end
  this.images.push(pictureObject);
  this.updatedImages.next([...this.images])
  console.log(responseData.message)
});
}
}





//ROVERS
/*
public getDataImage(id: number){
return this.http.get<any>(environment.baseUrl+environment.apiKey)
.pipe(map(res=>{
  let response = Array.of(res)
  return response.filter(x=>x.id===id)
}))
}


getPicByCamera(camera: string){
  return this.http.get<any>(environment.camUrl+camera+environment.apiKey)
  .pipe(map(result=>{
    console.log(result)
    let res: any[]=result['photos']
  return res;
  }))
}
//ALbums, NASA missions

getNasaAlbum(album:string){
return this.http.get('https://images-api.nasa.gov/album/Artemis')
.pipe(map(res=>{
  let x = res['collection']['items']
  return x
}));
} */

