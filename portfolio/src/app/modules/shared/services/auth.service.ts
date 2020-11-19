import { User } from './../../../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenTimer: any;
  private fetchedUser:User;

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

  login( email:string, password:string){
    const authData: any = {email: email, password: password};

    this.http.post<{token:string, expiresIn:number, fetchedUser:any}>('http://localhost:3000/api/user/login', authData)
    .pipe(map(res=>{
      return{
        id:res.fetchedUser._id,
        name:res.fetchedUser.name,
        email:res.fetchedUser.email,
        password:res.fetchedUser.password,
        isAdmin:res.fetchedUser.isAdmin,
        token:res.token,
        expiresIn:res.expiresIn
      }
    }))
    .subscribe(mapedResponse=>{

       if(mapedResponse){
        const expiresInDuration: number = mapedResponse.expiresIn;
        this.tokenTimer = setTimeout(() => {
          this.logOut();
        }, expiresInDuration *1000);

        this.fetchedUser = mapedResponse;
       localStorage.setItem('currentUser',JSON.stringify(this.fetchedUser));
       console.log(localStorage.getItem('currentUser'))
        this.router.navigate(['/home'])
      }
  })
}
logOut(){
  localStorage.removeItem('currentUser');
  this.router.navigate(['/login'])
}
}
