import { AuthService } from './../../modules/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:User[];
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.currentUser
    .subscribe(user=>{
      this.user=Array.of(user);
      console.log(this.user.map(token=>token['token']))
    })
  }

}
