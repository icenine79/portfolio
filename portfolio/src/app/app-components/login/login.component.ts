import { LocalService } from './../../modules/shared/services/local.service';
import { AuthService } from './../../modules/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
error:boolean=false;
  constructor(private fb:FormBuilder, private auth:AuthService, private localService:LocalService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
     // name:['', Validators.required],

      email:['', Validators.required],
      password:[null, Validators.required]
    });
    this.localService.currentMessage.subscribe(message=>{
      if(message==="Auth failed"){
        this.error=true
      }else{
        this.error=false;
      }
    })
       }
 // get name(){return this.loginForm.get('name')}

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  onSubmit(){
    this.auth.login(this.email.value,this.password.value)
}
}
