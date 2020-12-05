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
finder:any[];
series:boolean=false;
seasons:any;
seasonsGroup:number[]=[]
episodes:any[];
panelOpenState = false;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.data.subscribe(movie=>{
      let aux:any[]=Array.of(movie)
      console.log(aux)
      this.movie = aux.map(d=>d['detail']);
      this.seasons = this.movie.map(s=>s['totalSeasons'])
      console.log(+this.seasons)
      let temp =this.movie.map(title=>title['Title']);
      this.title = temp[0];
    })
    this.commentForm= this.fb.group({
      comment:['', Validators.required],
      author:['', Validators.required]
    });
    this.getComments();
    this.populateDropDown()
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
    this.commentForm.reset();

  }

  getComments(){
    this.movieService.getComments();
    this.movieService.getUpdatedCommentsListner()
    .subscribe(comments=>{
      this.finder = comments.filter(m=>m.movie===this.title)
     console.log(this.finder)
    })
  }
  searchEpisode(season:number){
    let s = season.toString()
    this.movieService.getEpisode(this.title,s)
    .subscribe(episode=>{
      this.episodes= episode['Episodes'];
    })
  }
  populateDropDown(){
    if(this.seasons!=null || this.seasons!=undefined){
      for(let i=0; i<this.seasons;i++){
        this.seasonsGroup.push(i)
      }
    }
    console.log(this.seasonsGroup)
  }
}
