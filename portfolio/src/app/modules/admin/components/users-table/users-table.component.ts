import { User } from './../../../../models/User';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
@Input()users:User[]=[]
@Output() change =new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(id:string){
    this.change.emit(id)
  }

  /* search(query:string){
    console.log(query)
    this.filteredUsers = (query)?
    this.users.filter(u=>u.name.toLowerCase().includes(query.toLowerCase())):
    this.users;
  } */
}
