import { Messages } from './../../models/Messages';
import { HomeService } from './../services/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fader, FaderNode } from './../../modules/shared/animations/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[Fader.animations, FaderNode.animations]
})
export class HomeComponent implements OnInit {
  newsletter: FormGroup
  messages:Messages[]=[]
  constructor(private fb: FormBuilder, private homeService:HomeService) { }

  ngOnInit(): void {
    this.newsletter = this.fb.group({
      message:['', Validators.required],
      email:['', Validators.required]
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
