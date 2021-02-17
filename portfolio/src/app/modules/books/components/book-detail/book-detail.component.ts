import { BookService } from './../../services/book.service';
 import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import {switchMap} from 'rxjs/operators'
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
books:Book[]=[]
id:string;
  constructor(private route: ActivatedRoute, private bookService:BookService) { }

  ngOnInit(): void {
    this.route.data.subscribe(book=>{
      this.books =Array.of(book['detail']['book'])
      console.log(this.books)
    })
  }

}
/* this.route.data.subscribe(movie=>{
      let aux:any[]=Array.of(movie)
      console.log(aux)
      this.movie = aux.map(d=>d['detail']);
      this.seasons = this.movie.map(s=>s['totalSeasons'])
      console.log(+this.seasons)
      let temp =this.movie.map(title=>title['Title']);
      this.title = temp[0];
    }) */
