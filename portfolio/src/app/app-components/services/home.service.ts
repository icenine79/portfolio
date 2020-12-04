import { Messages } from './../../models/Messages';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
private messages:Messages[]=[]
private updatedMessages = new Subject<Messages[]>()
  constructor(private http:HttpClient) { }



  saveMessage(messageObj:Messages){

    this.http.post<{message:string, messageId:string}>('http://localhost:3000/api/messages', messageObj)
    .subscribe(message=>{
      console.log(message.message)
      const id = message.messageId
      messageObj.id =id
      this.messages.push(messageObj)
      this.updatedMessages.next([...this.messages])
    })
  }
  getMessages(){
    this.http.get<{message:string, msgs:any}>('http://localhost:3000/api/messages')
    .pipe(map(res=>{
      return res.msgs.map(ms=>{
        return {
          id: ms._id,
          message:ms.message,
          email:ms.email
        }
      })
    })).subscribe(transformedData=>{
      this.messages=transformedData;
      this.updatedMessages.next([...this.messages])

    })
  }
  getUpdatedMessagesListner(){
    return this.updatedMessages.asObservable();
  }
}
