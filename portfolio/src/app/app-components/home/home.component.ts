import { Fader } from './../../modules/shared/animations/animations';
import { AuthService } from './../../modules/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[Fader.animations]
})
export class HomeComponent implements OnInit {
  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }

}
