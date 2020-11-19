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
  constructor(private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      name:['', Validators.required],

      email:['', Validators.required],
      password:[null, Validators.required]
    });
  }
  get name(){return this.loginForm.get('name')}

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  onSubmit(){
    this.auth.login(this.name.value,this.email.value,this.password.value)
}
}
