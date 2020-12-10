import { NasaService } from './../../modules/nasa/services/nasa.service';
import { Messages } from './../../models/Messages';
import { HomeService } from './../services/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fader, FaderNode } from './../../modules/shared/animations/animations';
import { Component, OnInit } from '@angular/core';
import { DayPicture } from 'src/app/modules/nasa/models/DayPicture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[Fader.animations, FaderNode.animations]
})
export class HomeComponent implements OnInit {
  newsletter: FormGroup
  messages:Messages[]=[]
  gallery:DayPicture[]=[]
  constructor(private fb: FormBuilder, private homeService:HomeService, private nasaService:NasaService) { }

  ngOnInit(): void {
    this.newsletter = this.fb.group({
      message:['', Validators.required],
      email:['', Validators.required]
    });
    //NASA
    this.nasaService.getImages();
    this.nasaService.getUpdatedImagesListner()
    .subscribe((response:DayPicture[])=>{
      this.gallery= response;
      console.log(this.gallery);
    });

  }

  get email(){return this.newsletter.get('email')}
  get message(){return this.newsletter.get('message')}

  onSubmit(){
    let messageObj:Messages={
      id:null,
      email:this.email.value,
      message:this.message.value
    }
    this.homeService.saveMessage(messageObj)
    this.newsletter.reset();

  }


}
