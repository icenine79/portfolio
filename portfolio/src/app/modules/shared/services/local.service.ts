import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {


  private messageSource = new BehaviorSubject('default message')
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message);
  }


}
