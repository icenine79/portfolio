import { User } from './../../../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenTimer: any;
  private fetchedUser;
  private token: string;

  constructor(private http:HttpClient, private router: Router) { }

  register(name:string, email:string, password:string){
    const authData: User = {name:name, email:email,password:password}
    this.http.post<{message:string}>('http://localhost:3000/api/user/signup', authData)
    .subscribe(response=>{
      console.log(response.message);
      console.log(response)
      this.router.navigate(['/login'])
    },error=>{
      console.log(error)
    })
  }

  login(name:string, email:string, password:string){
    const authData: User = {name:name,email: email, password: password};

    this.http.post<{token:string, expiresIn:number, fetchedUser:any}>('http://localhost:3000/api/user/login', authData)
    .subscribe(response=>{
      if(response){
        console.log(response.expiresIn);
        const expiresInDuration: number = response.expiresIn;
        this.tokenTimer = setTimeout(() => {
          this.logOut();
        }, expiresInDuration *1000);
        console.log(this.tokenTimer)
        this.fetchedUser=response.fetchedUser;
        console.log(this.fetchedUser['isAdmin'])
        console.log(this.fetchedUser)

      const token = response.token;
      this.token = token;
       localStorage.setItem('token',JSON.stringify(token));
        this.router.navigate(['/home'])
      }
  })
}
logOut(){
  localStorage.removeItem('token');
  this.router.navigate(['/login'])
}
}
