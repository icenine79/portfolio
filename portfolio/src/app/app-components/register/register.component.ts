import { Router } from '@angular/router';
import { LocalService } from './../../modules/shared/services/local.service';
import { AuthService } from './../../modules/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
error:boolean=false;
successMessage:boolean=false;

  constructor(private fb:FormBuilder, private auth:AuthService, private localService:LocalService, private router:Router) { }

  ngOnInit(): void {
  this.registerForm = this.fb.group({
      name:['',Validators.required],
      email:['', Validators.required],
      password:[null, Validators.required]
    });
    // tslint:disable-next-line: align
    this.localService.currentMessage
    .subscribe(message=>{
      console.log(message)
      if(message==="Registration failed"){
        this.error=true

      }else if(message==='User created'){
        this.error=false
        this.successMessage=true;

        setTimeout(()=>{                           //<<<---using ()=> syntax
          this.router.navigate(['/login'])

        }, 4000);
      }
    })
  }

get name(){return this.registerForm.get('name')}
get email(){return this.registerForm.get('email')}
get password(){return this.registerForm.get('password')}


onSubmit(){
  this.registerForm.reset();
  this.auth.register(this.name.value,this.email.value,this.password.value);
}
}
