import { FormGroup } from '@angular/forms';
import { StarWarsService } from './../../services/star-wars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-sw',
  templateUrl: './base-sw.component.html',
  styleUrls: ['./base-sw.component.css']
})
export class BaseSwComponent implements OnInit {
characters:any[]=[]
arrayChars:any[]=[]
swForm:FormGroup
  constructor(private swService:StarWarsService) { }

  ngOnInit(): void {
    this.swService.getCharacters()
    .subscribe(data=>{
      this.characters=data
      console.log(data)
    })
  }
  getCharacter(character){

    this.arrayChars.push(character)
    console.log(this.arrayChars)
  }
}
