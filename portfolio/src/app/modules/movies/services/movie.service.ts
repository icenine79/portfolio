import { MovieComment } from './../models/MovieComment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
movies:any[]=[]
updatedComments = new Subject<MovieComment[]>()
comments:MovieComment[]=[];
  constructor(private http: HttpClient) { }

  getMovies(name: string):Observable<any> {
     return this.http.get<any>("https://www.omdbapi.com/?t=" + name + "&plot=full&apikey=87c31e60")

  }

  getEpisode(name: string, season: string):Observable<any[]> {

    return this.http.get<any[]>(
      "https://www.omdbapi.com/?t=" +
        name +
        "&Season=" +
        season  +
        "&apikey=87c31e60"
    );
  }



  getUpdatedCommentsListner(){
    return this.updatedComments.asObservable();
  }

  saveComment(comment:MovieComment){
    this.http.post<{ message: string, commentId:string}>('http://localhost:3000/api/movies', comment)
  .subscribe(responseData=>{
    const id = responseData.commentId;
    comment.id = id; //transforma o _id mongo no id front end
     this.comments.push(comment);
    this.updatedComments.next([...this.comments])
    console.log(responseData.message);
  });
  }
getComments(){
  this.http.get<{message:string, comments:any}>('http://localhost:3000/api/movies')
  .pipe(map(commentsData=>{
    return commentsData.comments.map(comment=>{
      return {
        id: comment._id,
        comment: comment.comment,
        author:comment.author,
        movie:comment.movie
      }
    })
  }))
  .subscribe(transformedData=>{
    this.comments = transformedData;
    this.updatedComments.next([...this.comments])
  })
}

}
