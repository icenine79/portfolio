import { AuthService } from './../../modules/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public isMenuCollapsed = true;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn():boolean{
    return this.auth.isLoggedIn();
  }

  isAdmin():boolean{

    return (this.auth.isAdmin())?true:false
  }



logOut(){
  this.auth.logOut()
}
}
