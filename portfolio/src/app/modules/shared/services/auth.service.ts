import { User } from './../../../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenTimer: any;
  private token:any;
  private admin:any;
  private fetchedUser:User;
  private userObject:any[]=[]
private currentUserSubject: BehaviorSubject<User>
currentUser: Observable<User>

constructor(private http:HttpClient, private router: Router, private jwt:JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.isLoggedIn())
  }

  get currentUserVaue(){
    return this.currentUserSubject.value;
  }

  isLoggedIn():boolean{
    const user= localStorage.getItem('currentUser');
   return (user!==null)?true:false;
  }

  register(name:string, email:string, password:string){
    const authData: User = {name:name, email:email,password:password}
    this.http.post<{message:string}>('http://localhost:3000/api/user/signup', authData)
    .subscribe(response=>{
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
        this.router.navigate(['/home'])
      }
  })
}
logOut(){
  localStorage.removeItem('currentUser');
  this.router.navigate(['/login'])
}
}
