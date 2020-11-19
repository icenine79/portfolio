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
  constructor(private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
  this.registerForm = this.fb.group({
      name:['',Validators.required],
      email:['', Validators.required],
      password:[null, Validators.required]
    });
  }

get name(){return this.registerForm.get('name')}
get email(){return this.registerForm.get('email')}
get password(){return this.registerForm.get('password')}


onSubmit(){
  this.auth.register(this.name.value,this.email.value,this.password.value);
}
}
