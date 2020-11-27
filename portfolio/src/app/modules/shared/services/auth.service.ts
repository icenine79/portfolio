import { LocalService } from './local.service';
import { User } from './../../../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  private users:User[]=[];
  loginError:boolean=false;
  updatedUsers = new Subject<User[]>()

private currentUserSubject: BehaviorSubject<User>
currentUser: Observable<User>

constructor(
  private http:HttpClient,
  private router: Router,
  private jwt:JwtHelperService,
  private localService:LocalService) {
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
      console.log(response.message);
      this.localService.changeMessage('User created')
    },error=>{
      console.log(error);
      this.localService.changeMessage('Registration failed')

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
  },error=>{
    this.localService.changeMessage('Auth failed')

  })
}
logOut(){
  localStorage.removeItem('currentUser');
  this.router.navigate(['/home'])
}

getUpdatedUsersListner(){
  return this.updatedUsers.asObservable();
}

getUsers(){
this.http.get<{message:string, users:any}>('http://localhost:3000/api/user')
.pipe(map(res=>{
  return res.users.map(user=>{
    return {
      id:user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: user.token,
    }
  })
})).subscribe(newData=>{
  this.users=newData;
  this.updatedUsers.next([...this.users]);
});
}
}
