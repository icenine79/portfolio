
import { LocalService } from './../../modules/shared/services/local.service';
import { AuthService } from './../../modules/shared/services/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
error:boolean=false;
inp1: number;
inp2: number;
result: number;
symbol: string;
count: number = 0; //init to prevent NaN output
screen:any;
numbers:any[]=[];
res:any
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
    this.loginForm.reset();

}
reset() {
  this.inp1 = +"";
  this.inp2 = +"";
}


calculation(inp1, inp2, symbol) {

  switch (symbol) {
    case "+": {
      this.result = inp1 + inp2;
      break;
    }
    case "-": {
      this.result = inp1 - inp2;
      break;
    }
    case "*": {
      this.result = inp1 * inp2;
      break;
    }
    case "/": {
      this.result = inp1 / inp2;
      break;
    }
    default: {
      this.result = 0;
      break;
    }
  }
}






screenNumbers(number){
  this.numbers.push(number)
 this.screen=this.numbers;
// console.log(this.screen)
}

sum(){
  this.numbers.reduce(function(a,b){
   console.log( a+b)
  })

}













}

