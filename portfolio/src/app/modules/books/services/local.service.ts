import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private messageSource = new BehaviorSubject<any>('default message')
  currentMessage =this.messageSource.asObservable();
  constructor() { }


sendMessage(message:string){
  this.messageSource.next(message)
}

}
