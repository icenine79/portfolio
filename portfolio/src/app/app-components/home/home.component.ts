import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fader, FaderNode } from './../../modules/shared/animations/animations';
import { AuthService } from './../../modules/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[Fader.animations, FaderNode.animations]
})
export class HomeComponent implements OnInit {
  newsletter: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newsletter = this.fb.group({
      email:['', Validators.required]
    });
  }
  get email(){return this.newsletter.get('email')}

  onSubmit(){

  }


}
