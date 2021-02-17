import { LocalService } from './../../../shared/services/local.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../../models/Book';
import { BookService } from './../../services/book.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { mimeType } from './myme-type.validator';
@Component({
  selector: 'app-base-books',
  templateUrl: './base-books.component.html',
  styleUrls: ['./base-books.component.css'],
})
export class BaseBooksComponent implements OnInit {
  submitBook: FormGroup;
  imagePreview: any;
  books: Book[] = [];
  cat: string;
  filteredBooks: any[] = [];
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private localService:LocalService
  ) {}

  ngOnInit(): void {
    this.submitBook = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      /*  image: new FormControl(null,{
        validators: [Validators.required],
        asyncValidators:[mimeType]
      }), */
      name: ['', Validators.required],
    });
    this.getBooks();
    this.getParams();
  }
  get title() {
    return this.submitBook.get('title');
  }
  get author() {
    return this.submitBook.get('author');
  }
  get category() {
    return this.submitBook.get('category');
  }
  //get image(){return this.submitBook.get('image')}
  get name() {
    return this.submitBook.get('name');
  }

  getParams() {
    this.route.queryParamMap.subscribe((params) => {
      this.cat = params.get('category');
      this.booksFilter();
    });
  }
  onSubmit() {
    let book: Book = {
      title: this.title.value,
      author: this.author.value,
      category: this.category.value,
    };
    this.bookService.addBook(book);
  }

  getBooks() {
    this.bookService.getBooks();
    this.bookService.getUpdatedBooksListener().subscribe((books) => {
      this.books = this.filteredBooks = books;

      console.log(this.books);
      this.booksFilter();
    });
  }

  booksFilter() {
    this.filteredBooks = this.cat
      ? this.books.filter((b) => b.category === this.cat)
      : this.books;
  }
}

/* onImagePicked(event:Event){
  const file = (event.target as HTMLInputElement).files[0];
  this.submitBook.patchValue({image:file})
  this.image.updateValueAndValidity();
 const reader =  new FileReader()
reader.onload =()=>{
  this.imagePreview=reader.result as string;
 }
 reader.readAsDataURL(file)
} */
