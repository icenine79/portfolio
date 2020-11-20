import { MovieComment } from './../../models/MovieComment';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
movie:any[];
commentForm:FormGroup;
title:string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.data.subscribe(movie=>{
      let aux:any[]=Array.of(movie)
      this.movie = aux.map(d=>d['detail']);
      let temp =this.movie.map(title=>title['Title']);
      this.title = temp[0];
    })
    this.commentForm= this.fb.group({
      comment:['', Validators.required],
      author:['', Validators.required]
    });
    this.getComments();
  }
  get comment(){return this.commentForm.get('comment')}
  get author(){return this.commentForm.get('author')}
  onCommentSubmit(){
    let commentObj:MovieComment = {
      id:null,
      comment:this.comment.value,
      author: this.author.value,
      movie: this.title
    }
    this.movieService.saveComment(commentObj);
  }

  getComments(){
    this.movieService.getUpdatedCommentsListner()
    .subscribe(comments=>{
      console.log(comments)
    })
  }
}
