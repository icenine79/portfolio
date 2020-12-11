import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-base-calculator',
  templateUrl: './base-calculator.component.html',
  styleUrls: ['./base-calculator.component.css']
})
export class BaseCalculatorComponent implements OnInit {
arrayOfNumbers:any[]=[]
arrayOfNumbers2:any[]=[]
total:any;
  constructor() { }

  ngOnInit(): void {
  }


digits(number:any){
  this.arrayOfNumbers.push(number);
  console.log(number)
  console.log(this.arrayOfNumbers)
}
digits2(number:any){
  this.arrayOfNumbers2.push(number);
  console.log(number)
  console.log(this.arrayOfNumbers2)
}
calculate(symbol:any){

let x = this.arrayOfNumbers.concat(this.arrayOfNumbers2); //merge the arrays

if(symbol==="+"){
  this.total=x.reduce((a, b) => a + b); //sum operation
}
if(symbol==="-"){
  this.total=x.reduce((a, b) => a - b); //subtract operation
}
console.log('operation result is ' +this.total)

this.arrayOfNumbers = this.arrayOfNumbers.filter((n)=>{ //empty the array
	if(n){
return false
}
})
this.arrayOfNumbers2 = this.arrayOfNumbers2.filter((n)=>{ //empty the second array
	if(n){
return false
}
})
}
filter(displayedArray:any){
  displayedArray = displayedArray.filter((n)=>{
    if(n){
      return false;
    }
  })
}
}
